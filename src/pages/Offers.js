import {Layout as Header} from '../layouts/headerNavigation';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import { LayoutAuxiliaryPage } from '../layouts/LayoutAuxiliaryPage';
import {SectionSpacialOffer} from '../layouts/offers/SectionSpacialOffer';
import {Raleway} from 'next/font/google'

const raleway = Raleway({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})



const Offers = () => {
  return (
    <Header className={raleway.className}>
      <LayoutAuxiliaryPage>
        <SectionSpacialOffer/>
      </LayoutAuxiliaryPage>
      <SectionFooter/>
    </Header>
  )
}

export default Offers;