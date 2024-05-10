import { createRouter } from 'next-connect';
import { createConfig } from './utils/serverUtils';
import { connectDB } from '../../lib/connectDB';
const multer  = require('multer');

const upload = multer();
const treatmentObjFormData = upload.none();

const router = createRouter();
router.use(treatmentObjFormData);

router.post(async (req, res) => {
  const {idOffer, userName, userPhone, userMail, nameOffer} = req.body;
  let connection;
  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error('не удалось создать подключение');
    }
    try {
      await connection.execute('INSERT INTO `user_interest_offer` (`id_offer`, `offer_name`, `user_initials`, `user_phone`, `user_mail`) VALUES (?, ?, ?, ?, ?)', [idOffer, nameOffer, userName, userPhone, userMail]);
    }catch (e) {
      throw new Error('не удалось провести запись в базу данных');
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({message: 'заявка не создана повторите попытку позже'});
    return;
  } finally {
    if (connection) {
      connection.end();
    }
  }
  console.log('it s work');
  res.status(200).json({message: 'заявка успешно отправлена'});
});

const config = createConfig();
export {
  config
}

export default router.handler();