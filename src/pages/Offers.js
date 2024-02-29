import {Layout as Header} from '../layouts/headerNavigation';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import { LayoutAuxiliaryPage } from '../layouts/LayoutAuxiliaryPage';
import {SectionSpacialOffer} from '../layouts/offers/SectionSpacialOffer';
import {Raleway} from 'next/font/google'

//стилизация текста. Присвоение класа Header это необходимо что все сомпоненты наследывали данный клас от родительского
const raleway = Raleway({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})



const Offers = () => {
  return (
    <Header className={raleway.className}>
      <LayoutAuxiliaryPage title={'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ'}>
        <SectionSpacialOffer/>
      </LayoutAuxiliaryPage>
      <SectionFooter/>
    </Header>
  )
}

export default Offers;