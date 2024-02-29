import {Layout as Header} from '../layouts/headerNavigation';
import { LayoutAuxiliaryPage } from '../layouts/LayoutAuxiliaryPage';
import { QuestionsAnswers } from '../layouts/FAQ/QuestionsAnswers';
import { SectionFooter } from '../layouts/homePage/SectionFooter';
import { SectionLocation } from '../layouts/homePage/SectionLocation';
import { FirstSection } from '../layouts/consequences/firstSection';
import {Box} from '@mui/material';
import { SectionPay } from '../layouts/homePage/SectionPay';
import bgSecPayAndLoc from '../../public/image/homePage/sectionPayBgI.webp';


const Page = () => {
  return (
    <>
      <Header>
        <LayoutAuxiliaryPage title={'НАСЛІДКИ НЕСПЛАТИ БОРГУ'}>
          <FirstSection/>
          <Box
            sx={{
              backgroundImage: `url(${bgSecPayAndLoc.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <SectionPay/>
            <SectionLocation/>
          </Box>
        </LayoutAuxiliaryPage>
        <SectionFooter/>
      </Header>
    </>
  )
}

export default Page;