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
  let successRes, connection, decoded, lastUserSectionUniqueToken, currentPathFile, userData;
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

    console.log(lastUserSectionUniqueToken, tokenUniqueId)

    if (!lastUserSectionUniqueToken || lastUserSectionUniqueToken !== tokenUniqueId) {
      throw new Error ('неудалось пройти проверку');
    }
    try {
      fs.renameSync(file.path, `./public/uploads/${file.filename}`);
    } catch (e) {
      throw new Error ('не удалось перенести файл');
    }

    currentPathFile = `./public/uploads/${file.filename}`;
    const filePathForDB = currentPathFile.replace('/public', '');

    try {
      [userData] = await connection.execute('SELECT * FROM `users_data` WHERE `user_id` = ?', [userId]);
    } catch (e) {
      throw new Error ('не удалось получить информацию о пользователе');
    }

    if (!userData.length) {
      throw new Error ('пользователь не существует');
    }

    let {avatar, name, email} = userData[0];

    avatar = avatar ?? './public/assets/avatars/avatar-omar-darboe.png';

    try{
      await connection.query('INSERT INTO `offers_data` (id_user, user_name, id_session, user_email, user_avatar, title, url_img, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [userId, name, tokenUniqueId, email, avatar, title, filePathForDB, desc]);
      // [successRes] = await connection.query('SELECT * FROM `offers_data` ORDER BY `date` DESC');
    }catch (e) {
      throw new Error ('создание новой записи неуспешно');
    }
    // successRes = successRes[0];
  }catch (e) {
    console.log('лог ошибки', e.message);
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

const config = createConfig();
export {
  config
}

export default router.handler();