import Image from 'next/image';
import aboutPc from '../../../../public/image/homePage/index-about.webp';
import aboutMobile from '../../../../public/image/homePage/index-about-mobile.webp';
import { MiniLog } from '../../../styledComponent/svgComponents';
import { DescriptionServiceSectiom as Description } from './DescriptionServiceSectiom';
import { Box, Container } from '@mui/material';


export const OptimizationAboutSection = () => {
  const widthSize = window.innerWidth;
  const imageUrl = widthSize >= 900 ? aboutPc : aboutMobile;
  return (
    <Box
      sx={{
        padding: {xs: '50px 0px 0px 0px', md: '180px 0px'},
        backgroundColor: {xs: '#0C1A36', md: '#D9D9D9'},
        maxWidth: {xs: 'none', md: 'custXl'},
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Container
        maxWidth={'custXl'}
        disableGutters={widthSize <= 900}
      >
        <article>
          <Box
            sx={{
              display: {xs: 'block', lg: 'flex'},
            }}
          >
            <Box
              sx={{
                display: 'block',
                position: 'relative',
                height: 'auto',
                width: {xs: '100%', lg: '41%'},
              }}
            >
              <Image
                src={'/image/homePage/index-about.webp'}
                alt=''
                width={665}
                height={625}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%'
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
            </Box>
            <Description/>
          </Box>
        </article>
      </Container>
    </Box>
  )
}