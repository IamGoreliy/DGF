import { createRouter } from 'next-connect';
import { connectDB } from '../../lib/connectDB';

const router = createRouter();

router.get(async (req, res) => {
  let connection, deviceData;
  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error('не удалось создать подключение');
    }
    try {
      [deviceData] = await connection.query('SELECT * FROM `list_of_site_visits`');
      console.log('deviceData', deviceData)
    } catch (e) {
      throw new Error('не удалось получить ответ от сервера');
    }
  } catch (e) {
    console.log(e.message);
    return;
  } finally {
    if (connection) {
      connection.end();
    }
  }
  res.status(200).json(deviceData);
})

export default router.handler();