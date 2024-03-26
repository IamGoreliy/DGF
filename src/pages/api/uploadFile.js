import {createRouter, expressWrapper} from 'next-connect';
import {connectDB} from '../../lib/connectDB';
import {JWTKEY} from '../../lib/connectDB';
import {preloaderMiddleware, createConfig} from './utils/serverUtils';
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = createRouter();

router.use(preloaderMiddleware);

router.post(async (req, res) => {
  const { file } = req;
  const {title, desc, token} = req.body;
  const { 'user-agent': userAgent } = req.headers;
  let successRes, connection, decoded, lastUserSectionUniqueToken, currentPathFile;
  try {
    if (!file) {
      throw new Error ('отсутствует файл');
    }
    currentPathFile = file.path;
    try {
      decoded = jwt.verify(token, JWTKEY);
    } catch (e) {
      throw new Error ('decoded doest work');
    }
    const {userId, tokenUniqueId, userAgent: UsAgFromUser} = decoded;
    if (userAgent !== UsAgFromUser) {
      throw new Error ('токет получин с другого компьютра');
    }
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error ('не удалось создать подключение к базе данных');
    }
    try {
      [lastUserSectionUniqueToken] = await connection.query('SELECT `token_unique_id` FROM `session_auth` WHERE `user_id` = ? ORDER BY `date` DESC LIMIT 1', [userId]);
    } catch (e) {
      throw new Error ('неудалось подключится к базе данных');
    }

    lastUserSectionUniqueToken = lastUserSectionUniqueToken.reduce((acc, ele) => ele['token_unique_id'], '');

    if (!lastUserSectionUniqueToken || lastUserSectionUniqueToken !== tokenUniqueId) {
      throw new Error ('неудалось пройти проверку');
    }
    try {
      fs.renameSync(file.path, `./public/uploads/${file.filename}`);
    } catch (e) {
      throw new Error ('не удалось перенести файл');
    }

    currentPathFile = `./public/uploads /${file.filename}`;

    try{
      await connection.query('INSERT INTO `offers_data` (id_user, id_session, title, url_img, description) VALUES (?, ?, ?, ?, ?)', [userId, tokenUniqueId, title, currentPathFile, desc]);
      // [successRes] = await connection.query('SELECT * FROM `offers_data` ORDER BY `date` DESC');
    }catch (e) {
      throw new Error ('создание новой записи неуспешно');
    }
    // successRes = successRes[0];
  }catch (e) {
    fs.access(currentPathFile, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.rmSync(currentPathFile);
      }
    })
    res.status(400).json({message: e.message});
    return;
  } finally {
      await connection.end();
  }
  res.status(200).json({message: 'продукт успешно создан'});
});


export const config = createConfig();

export default router.handler();