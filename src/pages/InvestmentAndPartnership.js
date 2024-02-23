import { Layout as Header } from '../layouts/headerNavigation';
import { SectionFooter } from '../layouts/homePage/SectionFooter';
import {AboutClients} from '../layouts/InvestmentAndPartnership/aboutClients';
import {SectionPartners} from '../layouts/homePage/SectionPartners';
import { InvestInBusiness } from '../layouts/InvestmentAndPartnership/InvestInBusiness';

const InvestmentAndPartnership = () => {
  return (
    <Header>
      <AboutClients/>
      <SectionPartners/>
      <InvestInBusiness/>
      <SectionFooter/>
    </Header>
  )
}

export default InvestmentAndPartnership;

