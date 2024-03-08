import {createRouter} from 'next-connect';
import { connectDB, JWTKEY } from '../../lib/connectDB';
import {v4 as uuidv4} from 'uuid';
const jwt = require('jsonwebtoken');


const router = createRouter();

router.post(async (req, res) => {
  const {email, pass} = req.body;
  console.log('check', email, pass);
  const userAgent = req.headers['user-agent'];
  let connection, userAuth, userInfo, tokenUniqueId, token;
  try {
    try {
      connection = await connectDB();
    }catch (e) {
      throw new Error ('connectDB doesnt work');
    }
    try {
      [userAuth] = await connection.query('SELECT `id` FROM `users_auth` WHERE login = ? AND pass = ?', [email, pass]);
      userAuth = userAuth[0];
    }catch (e) {
      throw new Error ('data base doesnt work');
    }
    if (!userAuth) {
      throw new Error ('password is wrong');
    }
    try {
      tokenUniqueId = uuidv4();
      token = jwt.sign({userId: userAuth.id, tokenUniqueId, userAgent}, JWTKEY);
    } catch (e) {
      throw new Error ('create token doesnt work');
    }

    try{
      await connection.query('INSERT INTO `session_auth` ( user_id, token_unique_id, token ) VALUES ( ?, ?, ?)', [userAuth.id, tokenUniqueId, token]);
    }catch (e) {
      console.log(e)
      throw new Error ('error occurred while recording the session' +  token.length);
    }
    try {
      [userInfo] = await connection.query('SELECT * FROM `users_data` WHERE `user_id` = ?', [userAuth.id]);
      userInfo = userInfo[0];
      await connection.end();
    }catch (e) {
      throw new Error ('something wrong with data base. Please try again later');
    }
  }catch (e) {
    res.status(400).json(e.message);
    return;
  }
  res.status(200).json({userInfo, token});
})


export default router.handler();