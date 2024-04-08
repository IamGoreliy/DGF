import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';

const router = createRouter();

router.post(async (req, res) => {
  console.log('hi')
  const {id} = req.body;
  console.log('id query', id);
  // let connection, offerData;
  // try {
  //   try {
  //     connection = connectDB();
  //   }catch (e) {
  //     throw new Error ('созданиеи подключения к базе данных неудачно');
  //   }
  //   try {
  //     [offerData] = (await connection).query('SELECT * FROM `offers_data` WHERE `id` = ?', [id]);
  //   }catch (e) {
  //     throw new Error ('не удалось получить информацию про продукт')
  //   }
  //   if (!offerData) {
  //     throw new Error ('продукт не найден');
  //   }
  //   offerData = offerData[0];
  // }catch (e) {
  //   console.log(e.message)
  //   res.status(400).json({message: e.message});
  //   return
  // }finally {
  //   if (connection) {
  //     connection.end();
  //   }
  // }
  res.status(200).json({ message: 'test' });
})

export default router.handler();