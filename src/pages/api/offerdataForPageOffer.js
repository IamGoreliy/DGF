import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';

const route = createRouter();


route.get(async (req, res) => {
  let offerData, connection;
  try {
    try{
      connection = await connectDB();
    } catch (e) {
      throw new Error ('не удалось подключится к базе данных')
    }
    try {
      [offerData] = await connection.query('SELECT * FROM `offers_data`');
    }catch (e) {
      throw new Error ('не удалось получить данные с базы данных');
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({message: e.message});
    return
  } finally {
    if (connection) {
      connection.end();
    }
  }
  res.status(200).json(offerData);
})

export default route.handler();