import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';

const router = createRouter();


router.post(async (req, res) => {
  let { value, rowsPerPage, preLoadingData} = req.body;
  console.log(req.body)
  let connection, offerData, totalRecords;
  value = `%${value}%`;
  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error('создание соединения с базой данных неуспешно');
    }
    try {
      [offerData] = await connection.query('SELECT * FROM `offers_data` WHERE `title` LIKE ? ORDER BY `date` DESC LIMIT ? OFFSET ?', [value, rowsPerPage, preLoadingData]);
      [totalRecords] = await connection.query('SELECT COUNT(`id`) as `id` FROM `offers_data` WHERE `title` LIKE ?', [value]);
    }catch (e) {
      throw new Error('база данных не отвичает');
    }
    totalRecords = totalRecords.reduce((acc, ele) => acc = ele.id, 0);
  } catch (e) {
    console.log(e.message);
      res.status(400).json({message: e.message});
      return;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
  res.status(200).json({offerData, totalRecords});
} )

export default router.handler();
