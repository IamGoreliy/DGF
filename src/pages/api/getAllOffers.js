import {createRouter} from 'next-connect';
import {connectDB} from '../../lib/connectDB';
const multer = require('multer');


const router = createRouter();

router.get(async (req, res) => {
  let connection, offerData, totalRecords;
  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error ('соединение не создано');
    }
    try {
      [totalRecords] = await connection.execute('SELECT COUNT(id) FROM `offers_data`');
      [offerData] = await connection.execute('SELECT * FROM `offers_data`ORDER BY `date` DESC LIMIT 10 OFFSET 0');
    }catch (e) {
      throw new Error ('нет связи с базой данных');
    }
  }catch (e) {
    console.log('консоль ошибки', e.message);
    res.status(400).json({message: e.message});
    return;
  }finally {
    if (connection) {
      await connection.end();
    }
  }
  res.status(200).json(offerData);
})

export default router.handler();