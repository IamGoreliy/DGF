import Image from 'next/image';
import aboutPc from '../../../../public/image/homePage/index-about.webp';
import { MiniLog } from '../../../image/logo/svgComponents';
import { Container } from '@mui/material';

const CustArticle = styled.article`
    margin-top: 100px;
    position: relative;
`

const WrapperImg = styled.div`
    display: block;
    position: relative;
    min-width: 400px;
    max-width: 665px;
    height: auto;
`

export const AboutCompanyMobileVersion = () => {
  return (
    <Container
      maxWidth={'custXl'}
      sx={{
        display: {xs: 'none', md: 'block'},
        height: {xs: '600px', md: '810px'}
      }}
    >
      <CustArticle>
        <WrapperImg>
          <Image
            ref={widthImage}
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
        <div></div>
      </CustArticle>
    </Container>
  )
}