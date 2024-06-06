import { createRouter } from 'next-connect';
const fs = require('fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server')

const createFileContent = (name, childrenContent) => {
  const childrenContentString = ReactDOMServer.renderToStaticMarkup(childrenContent);
  return `
  import {Layout as Header} from '../layouts/headerNavigation';
  import {LayoutAuxiliaryPage} from '../layouts/LayoutAuxiliaryPage';
  
  const Page = () => {
      return (
          <Header>
            <LayoutAuxiliaryPage>
              ${childrenContentString}
            </LayoutAuxiliaryPage>
          </Header>
      )
    }
    export default Page;
  `
}

const title = <><h1>привет мир!</h1></>;

const router = createRouter();

router.post(async (req, res) => {
  const { data } = req.body;
  console.log(data);
  const directoryPath = './src/pages/';
  const filePath = path.join(directoryPath, `${data}.js`);
  const fileContent = createFileContent(data, title);
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log('возникла ошибка при создание файла');
    }
    console.log('файл успешно создан');
  })
})


export default router.handler();