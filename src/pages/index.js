import {Layout as HomeLayout} from "src/layouts/headerNavigation";
import { SectionInfo } from "src/layouts/homePage/sectionInfo";
import {AboutCompany} from '../layouts/homePage/sectionAboutCompany';
import {ServiceSection} from '../layouts/homePage/SectionService';
import {SectionPartners} from '../layouts/homePage/SectionPartners';
import {SectionPay} from '../layouts/homePage/SectionPay';
import {SectionLocation} from '../layouts/homePage/SectionLocation';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import {createContext} from 'react';
import { NewHeaderNav } from '../layouts/NewHeaderNav';


export const Context = createContext();

const Page = () => {
  const windowSize = window.innerWidth;
    return (
        <>
        <Context.Provider value={windowSize}>
          {/*<NewHeaderNav>*/}
          <HomeLayout>
            <SectionInfo />
            <AboutCompany/>
            <ServiceSection/>
            <SectionPartners/>
            <SectionPay/>
            <SectionLocation/>
            <SectionFooter/>
          </HomeLayout>
          {/*</NewHeaderNav>*/}
        </Context.Provider>
        </>
    )
}

export default Page;