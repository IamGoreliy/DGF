import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';
import { createConfig } from './utils/serverUtils';
const multer = require('multer');
const jwtParser = require('jsonwebtoken');
import { JWTKEY } from '../../lib/connectDB';
const moment = require('moment');

const parseFormData = multer();
const cbParseFormData = parseFormData.none();

const router = createRouter();
router.use(cbParseFormData);

router.post(async (req, res) => {
  const {jwt: jwtToken, message, idOffer} = req.body;
  const usAg = req.headers['user-agent'];
  let decoded, connected, checkJWT, currentData, adminName;
  try {
    try {
      decoded = jwtParser.verify(jwtToken, JWTKEY);
    } catch (e) {
      throw new Error ('не удалось прочитать токен');
    }
    if (usAg !== decoded.userAgent) {
      throw new Error ('неверный токен');
    }
    try {
      connected = await connectDB();
    }catch (e) {
      throw new Error ('не удалось создать соединение с базой данных');
    }
    try {
      [checkJWT] = await connected.query('SELECT * FROM `session_auth` WHERE `user_id` = ? ORDER BY `date` DESC LIMIT 1', [decoded.userId]);
      [adminName] = await connected.query('SELECT `name` FROM `users_data` WHERE `user_id` = ?', [decoded.userId]);
    } catch (e) {
      throw new Error('не удалось получить ответ от базы данных при верефикации');
    }
    if (!checkJWT.length) {
      throw new Error('пользователь отсутствует в базе данных');
    }
    adminName = adminName.reduce((acc, ele) => acc = ele.name, '');
    checkJWT = checkJWT[0];
    if (decoded.tokenUniqueId !== checkJWT['token_unique_id']) {
      throw new Error ('не удалось верифицировать пользователя');
    }
    currentData = moment().format('YYYY-MM-DD');
    await connected.execute('UPDATE `user_interest_offer` SET `message` = ?, `date_set_message` = ?, `name_admin` = ? WHERE `id` = ? ', [message, currentData, adminName, idOffer]);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({message: e.message});
    return;
  } finally {
    if (connected) {
      connected.end();
    }
  }
  res.status(200).json({message: 'сообщение добавлено'});
})

const config = createConfig();
export {
  config
};


export default router.handler();