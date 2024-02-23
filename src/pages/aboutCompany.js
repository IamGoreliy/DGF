import {Layout as HeaderLayout} from '../layouts/headerNavigation';
import {SectionControlAndSurveillance} from '../layouts/aboutCompany/SectionControlAndSurveillance';
import { SectionFAQ } from '../layouts/aboutCompany/SectionFAQ';
import { SectionFooter } from '../layouts/homePage/SectionFooter';
import { SectionInfoSettlementOfOverdueDebt } from '../layouts/aboutCompany/SectionInfoSettlementOfOverdueDebt';

const Page = () => {
  return (
    <>
      <HeaderLayout>
        <SectionControlAndSurveillance/>
        <SectionFAQ/>
        <SectionInfoSettlementOfOverdueDebt/>
        <SectionFooter/>
      </HeaderLayout>

    </>
  )
}

export default Page;