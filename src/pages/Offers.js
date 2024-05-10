import {Layout as Header} from '../layouts/headerNavigation';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import { LayoutAuxiliaryPage } from '../layouts/LayoutAuxiliaryPage';
import {SectionSpacialOffer} from '../layouts/offers/SectionSpacialOffer';
import {Raleway} from 'next/font/google'
import { offerForPageOffer } from '../utils/custFetch';
import {createContext} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//стилизация текста. Присвоение класа Header это необходимо что все сомпоненты наследывали данный клас от родительского
const raleway = Raleway({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export const Data = createContext([]);


const Offers = ({data}) => {
  return (
    <Header className={raleway.className}>
      <LayoutAuxiliaryPage title={'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ'}>
        <Data.Provider value={data}>
          <SectionSpacialOffer />
        </Data.Provider>
      </LayoutAuxiliaryPage>
      <SectionFooter/>
      <ToastContainer
        position="top-left"
        autoClose={2000}
      />
    </Header>
  )
}

export default Offers;

export async function getServerSideProps () {
  const data = await offerForPageOffer();
  return {
    props: {
      data
    }
  }
}