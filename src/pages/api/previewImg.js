import { createRouter } from 'next-connect';
import {preloaderMiddleware} from './utils/serverUtils';
import {createConfig} from './utils/serverUtils';

const router = createRouter();

router.use(preloaderMiddleware);

router.post(async (req, res) => {
  const {file} = req;
  try {
    if (!file) {
      throw new Error ('файл не поддерживается');
    }
  } catch (e) {
    res.status(400).json({message: e.message});
    return
  }
  res.status(200).json({filePath: file.filename});
})

const config = createConfig();
export {
  config
}



export default router.handler();