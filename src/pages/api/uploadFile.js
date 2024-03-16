import {createRouter, expressWrapper} from 'next-connect';
import {connectDB} from '../../lib/connectDB';
const multer = require('multer')
const router = createRouter();


const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const uploaderMiddleware = upload.single('img');

router.use(uploaderMiddleware);

router.post(async (req, res) => {
  // const file = req.file
  console.log('file', req.file);
  console.log('body', req.body);
  res.json({});
  // console.log(req.files)
});

// router.use(async (req, res, next) => {
//   const form = new multiparty.Form()
//
//   await form.parse(req, function (err, fields, files) {
//     req.body = fields
//     req.files = files
//     next()
//   })
// })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default router.handler();