import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';
import { JWTKEY } from '../../lib/connectDB';
const jwt = require('jsonwebtoken');

const router = createRouter();

router.post(async (req, res) => {
  const { id: idOffers, jwt: userJWT } = req.body;
  const userAgWithReq = req.headers['user-agent'];
  let connection, decoded, checkUserSession;
  try {
    try {
      decoded = jwt.verify(userJWT, JWTKEY);
    }catch (e) {
      throw new Error('не получилось прочитать ключ');
    }
    if (userAgWithReq !== decoded.userAgent) {
      throw new Error('проверка не пройдена');
    }
    try {
      connection = await connectDB();
    }catch (e) {
      throw new Error('нет подключение к базе данных');
    }
    try {
      [checkUserSession] = await connection.query('SELECT `token_unique_id` FROM `session_auth` WHERE `user_id` = ? ORDER BY `date` DESC', [decoded.userId]);
    } catch (e) {
      throw new Error ('не удалось выполнить проверку с базой данных');
    }
    checkUserSession = checkUserSession[0]['token_unique_id'];
    console.log(checkUserSession);
    if (!checkUserSession || checkUserSession !== decoded.tokenUniqueId) {
      throw new Error('авторизация выполнена неуспешно');
    }
    try {
      await connection.query('DELETE FROM `offers_data` WHERE `id` IN (?)', [idOffers]);
    } catch (e) {
      throw new Error ('операция по удаленияю неуспешная');
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({message: e.message});
    return;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
  res.status(200).json('удаление прошло успешно');
});

export default router.handler();