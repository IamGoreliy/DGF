import { createRouter } from 'next-connect';
import { connectDB} from '../../lib/connectDB';

const router = createRouter();

router.post(async (req, res) => {
  const {id} = req.body;
  let informationForOffers, connected;
  try {
    try {
      connected = await connectDB();
    } catch (e) {
      throw new Error('не удалось создать подключение к базе данных');
    }
    try {
      [informationForOffers] = await Promise.all(id.map(id => connected.query('SELECT * FROM `offers_data` WHERE `id`', [id])));
    } catch (e) {
      throw new Error('не удалось получить информацию о продукте');
    }

  } catch (e) {
    res.status(400).json({message: e.message});
    return;
  } finally {
    if (connected) {
      connected.end();
    }
  }
  res.status(200).json({ data: informationForOffers[0] });
});

export default router.handler();