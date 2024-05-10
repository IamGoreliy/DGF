import { createRouter } from 'next-connect';
import {connectDB} from '../../lib/connectDB';
import cookie from 'cookie';
import {v4 as uuidv4} from 'uuid';

const route = createRouter();

const handlerSetCookies = async (req, res, next) => {
  const cookiesString = req.headers.cookie;
  const {device: whatDeviceUser} = req.body;
  const userAgent = req.headers['user-agent'];
  const cookies = cookie.parse(cookiesString || '');
  const deviceId = cookies.deviceId;
  let connection;
  if (deviceId) {
    req.deviceId = deviceId;
  } else {
    const newDeviceId = uuidv4();
    res.setHeader('Set-Cookie', cookie.serialize('deviceId', newDeviceId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    }))
    try {
      try {
        connection = await connectDB();
      } catch (e) {
          throw new Error('не удалось создать соединение с базой данных');
      }
      try {
        await connection.query('INSERT INTO `list_of_site_visits` (`id_device_being_visited`, `user_agent`, `what_device_user`) VALUES (?, ?, ?)', [newDeviceId, userAgent, whatDeviceUser]);
      } catch (e) {
        throw new Error ('не удалось произвести запись устройства');
      }
    } catch (e) {
        req.errorCreateCookies = e.message;
    } finally {
      if (connection) {
        connection.end();
      }
    }
    req.deviceId = newDeviceId;
  }

  next();
}

route.use(handlerSetCookies);

route.post(async (req, res) => {
  if (!req.deviceId) {
    res.status(400).json({message: req.errorCreateCookies});
    return;
  }
  res.status(200).json({message: 'сессия удачна'});
})

export default route.handler();


// const cookieStr = req.headers.cookie;
// const userAgent = req.headers['user-agent'];
// const {device: whatDeviceUSer} = req.body;
// const deviceIdCookie = cookie.parse(cookieStr || '');
// const deviceId = deviceIdCookie.deviceId;
// if (deviceId) {
//   let connection, deviceCookie;
//   try {
//     try {
//       connection = await connectDB();
//     } catch (e) {
//       throw new Error('не удалось создать соединение с базой данных');
//     }
//     try {
//       [deviceCookie] = await connection.query('SELECT `id_device_being_visited` FROM `list_of_site_visits` WHERE `id_device_being_visited` = ?', [deviceId]);
//     } catch (e) {
//       throw new Error ('не удалось подключить сессию');
//     }
//     if (!deviceCookie.length) {
//       try {
//         await connection.execute('INSERT INTO `list_of_site_visits` (`id_device_being_visited`, `user_agent`, `what_device_user`) VALUES(?, ?, ?)', [deviceId, userAgent, whatDeviceUSer]);
//       } catch (e) {
//         throw new Error('не удалось записать сессию')
//       }
//     }
//   } catch (e) {
//     console.log(e.message);
//     res.status(400).json({message: e.message});
//     return;
//   } finally {
//     if (connection) {
//       await connection.end();
//     }
//   }
// } else {
//   res.status(400).json({ message: 'reload' });
//   return;
// }
