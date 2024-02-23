import {Container} from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import AboutAsImg from '../../../../public/image/homePage/index-about-mobile.webp'
import { MiniLog } from '../../../image/svgComponents';
import {Typography} from '@mui/material';
import {DescriptionServiceSectiom as Description} from './DescriptionServiceSectiom';

const AboutSection = styled(props => {
  const {windowSize, ...other} = props;
  return <div {...other}/>
})(({windowSize}) => {
  return {
    display: windowSize >= 900 ? 'none' : 'block',
    backgroundColor: '#0C1A36',
  }
})

const AboutImgWrapper = styled.div`
    position: relative;
`

const CustH2 = styled.h2`
    color: white;
  position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 1px;
      background-color: yellow;
    }
`

const CustSpan = styled.span`
    display: block;
    color: white;
    & + & {
      margin-top: 30px;
    }
`

export const AboutCompanyMobileVersion = () => {
  const windowsSize = window.innerWidth;
  return (
    <AboutSection
      windowSize={windowsSize}
    >
      <AboutImgWrapper>
        <Image
          src={AboutAsImg}
          alt=''
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        <MiniLog
          style={{
            display: 'block',
            position: "absolute",
            bottom: '-3px',
            left: '0px',
            width: '100%',
            height: '15px'

          }}
        />
      </AboutImgWrapper>
      <Description/>
    </AboutSection>
  )
}