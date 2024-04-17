import {createRouter} from 'next-connect';
import {connectDB} from '../../lib/connectDB';



const router = createRouter();

router.get(async (req, res) => {
  const {page: rowsPerPage, offset } = await req.query;
  let connection, offerData, totalRecords;
  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error ('соединение не создано');
    }
    try {
      [totalRecords] = await connection.execute('SELECT COUNT(id) as `counterAllEntries` FROM `offers_data`');
      [offerData] = await connection.execute('SELECT * FROM `offers_data`ORDER BY `date` DESC LIMIT ? OFFSET ?', [rowsPerPage, offset]);
    }catch (e) {
      throw new Error ('нет связи с базой данных');
    }
    totalRecords = totalRecords.reduce((acc, value) => acc = value.counterAllEntries, 0);
  }catch (e) {
    console.log('консоль ошибки', e.message);
    res.status(400).json({message: e.message});
    return;
  }finally {
    if (connection) {
      await connection.end();
    }
  }
  res.status(200).json({offerData, totalRecords, currentOffers: offerData.length});
})

export default router.handler();