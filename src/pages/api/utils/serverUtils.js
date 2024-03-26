const multer = require('multer');

const filterImg = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const preloader = multer({
  storage: multer.diskStorage({
    destination: './public/temps',
    filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
  }),
  fileFilter: filterImg,
})

export const preloaderMiddleware = preloader.single('img');

export const createConfig = () => {
  return {
    api: {
      bodyParser: false,
    },
  }

}