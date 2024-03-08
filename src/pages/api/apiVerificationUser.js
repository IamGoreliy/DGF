import {createRouter} from 'next-connect';
import { connectDB, JWTKEY } from '../../lib/connectDB';
const jwt= require('jsonwebtoken');

const router = createRouter();

router.post(async (req, res) => {
  const {token} = req.body;
  const userAgent = req.headers['user-agent'];
  let decode, isLastSession, verificationUserData;
  let connection = null;

  try {
    try {
      decode = jwt.verify(token, JWTKEY);
    } catch (e) {
      throw new Error ('jwt did not work when passing verification');
    }
    const {userId, tokenUniqueId, userAgent: userAgentFromToken} = decode;

    if (userAgentFromToken !== userAgent) {
      throw new Error('verification failed');
    }
    try {
      connection = await connectDB();
    }catch (e) {
      throw new Error ('database doesnt load');
    }

    try {
      [isLastSession] = await connection.query('SELECT `token_unique_id` FROM `session_auth` WHERE `user_id` = ? ORDER BY `date` DESC', [userId]);
      isLastSession = isLastSession[0];
    }catch (e) {
      throw new Error ('auth doesnt work');
    }

    if (isLastSession['token_unique_id'] !== tokenUniqueId) {
      throw new Error ('verification did now passing verification');
    }

    try {
      [verificationUserData] = await connection.query('SELECT * FROM `users_data` WHERE `user_id` = ?', [userId]);
      await connection.end();
      verificationUserData = verificationUserData[0];
    }catch (e) {
      throw new Error ('database doesnt load. Please try again later');
    }

  } catch (e) {
    res.status(400).json(e.message);
    if (connection !== null) {
      await connection.end();
    }
    return;
  }

  res.status(200).json(verificationUserData);
})

export default router.handler();