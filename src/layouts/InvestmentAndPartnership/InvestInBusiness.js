import { Box, Container, Typography } from '@mui/material';
import { colorSite } from '../../styledComponent/colorSite';
import Image from 'next/image';
import investPc from '../../../public/image/aboutPartners/invest.webp';
import investMob from '../../../public/image/aboutPartners/invest-mobile.webp';
import miniLogo from '../../../public/image/miniLog.svg';
import { useContext } from 'react';
import {WindowSeizeContext} from '../headerNavigation';
import { CustH2 } from '../../styledComponent/StyledComponent';

export const InvestInBusiness = () => {
  const { windowSize } = useContext(WindowSeizeContext);
  const isMobile = windowSize <= 900;
  return (
    <Box
      sx={{
        padding: {xs: '0px', md:'clamp(80px,11.25vw,180px) 0'},
      }}
    >
      <Container
        maxWidth={'custXl'}
        disableGutters={isMobile}
      >
        <Box
          sx={{
            backgroundColor: colorSite.wrapperBoxControl,
            display: {xs: 'block', md: 'flex'},
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: {xs: '100%', md: '665px'},
              flexBasis: '30%'
            }}
          >
            <Image
              src={isMobile ? investMob : investPc}
              alt=''
              width={665}
              height={625}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <Image
              src={miniLogo}
              alt=''
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                width: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              padding: '80px clamp(20px,5vw,80px)',
              color: 'white',
              flexBasis: '70%'
            }}
          >
            <CustH2
              topB={'-20px'}
              bgcB={'yellow'}
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontStyle: 'normal',
                fontWeight: '800',
                fontSize: 'clamp(25px,1.875vw,30px)',
                lineHeight: '105%',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
              }}
            >
              ІНВЕСТУВАННЯ В БІЗНЕС
            </CustH2>
            <Typography
              sx={{
                marginTop: '70px',
                fontFamily: 'Calibri,sans-serif',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '186%',
              }}
            >
              Одна із ключових складових, для успішного розвитку економіки - Кредитування. Розвивається кредитування – розвивається економіка. Розвивається економіка – розвивається країна. Похідною складовою кредитування є формування NPL портфелів. Досить велика частка позичальників переоцінюють свої фінансові можливості або ж зіштовхуються з суттєвими факторами впливу (зниження доходів, втрата джерел доходів, побутові проблеми), які не вдається своєчасно перебороти. Наша команда представлена експертами даного ринку, а тому здатна забезпечити високий рівень прибутковості при помірних ризиках інвестування.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}