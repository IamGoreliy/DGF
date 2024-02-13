import Image from 'next/image';
import aboutPc from '../../../../public/image/homePage/index-about.webp';
import { MiniLog } from '../../../image/logo/svgComponents';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import {DescriptionServiceSectiom as Description} from './DescriptionServiceSectiom';

const CustArticle = styled.article`
    position: relative;
    display: flex;
`

const WrapperImg = styled.div`
    display: block;
    position: relative;
    //min-width: 400px;
    //max-width: 665px;
    height: auto;
    width: 42%;
`

const WrapperText = styled.div`
    background-color: #0C1A36;
    width: 58%;
    padding: 80px;
`

const CustH2 = styled.h2`
    color: white;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -10px;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: yellow;
    }
`
const CustSpan = styled.span`
    display: block;
    color: white;
    margin-top: 50px;
    & + & {
      margin-top: 50px;
    }
`

export const AboutCompanyPcVersion = () => {
  return (
    <Container
      maxWidth={'custXl'}
      sx={{
        display: {xs: 'none', md: 'block'},
        padding: '180px 0px'
      }}
    >
      <CustArticle>
        <WrapperImg>
          <Image
            src={aboutPc}
            alt=''
            style={{
              display: 'block',
              width: '100%'
            }}
          />
          <MiniLog
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              height: '15px',
              width: '100%'
            }}
          />
        </WrapperImg>
        <Description/>
      </CustArticle>
    </Container>
  )
}