import styled from '@emotion/styled';
import {OptimizationAboutSection as Optimization} from './aboutCompanyMobile/opimizationAboutSection';

const SectionWrapper = styled.div`
  background-color: #D9D9D9;
`



export const AboutCompany = () => {

  return (
    <SectionWrapper>
      <Optimization/>
    </SectionWrapper>
  )
}