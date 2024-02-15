import { Box, Container, Typography } from '@mui/material';
import {colorSite} from '../../../styledComponent/colorSite';
import {fonts} from '../../../styledComponent/fonts';
import {Breadcrumbs} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo2 from '../../../../public/image/aboutCompany/logo2.svg'
import {MobileSection} from './mobile';
import miniLog from '../../../../public/image/miniLog.svg';

export const SectionControlAndSurveillance = () => {
  return (
    <Box
      sx={{
        backgroundColor: colorSite.backgroundColorSectionControl,
      }}
    >
      {/*🦄🦄🦄⬇️⬇️мобильная версия title⬇️⬇️🦄🦄🦄*/}
      <Box
        sx={{
          display: {xs: 'block', md: 'none'}
        }}
      >
        <MobileSection/>
      </Box>
      <Container
        maxWidth={'custXl'}
      >
        <Box
          sx={{
            display: {xs: 'none', md:'block'},
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 'fit-content',
              padding: '20px clamp(15px,3.125vw,50px) 20px calc(15px + clamp(25px,3.125vw,50px))',
              backgroundColor: colorSite.colorBlack,
              color: colorSite.colorTextWhite,
              ...fonts.sectionAboutCompany.titleAboutCompany,
              display: 'flex',
            }}
          >
            <Image
              src={logo2}
              alt=''
              style={{
                position: 'absolute',
                height: '100%',
                top: '0px',
                left: '0px',
              }}
            />
            ПРО КОМПАНІЮ
          </Box>
          <Box>
            <Breadcrumbs
              aria-label='breadcrumb'
              separator='|'
              sx={{
                marginTop: '20px',
                ...fonts.sectionAboutCompany.breadCrumbs,
              }}
            >
              <Link
                href={'/'}
                style={{
                  textDecoration: 'none',
                  color: colorSite.colorTextBlack,
                }}
              >Головна</Link>
              <Typography
                sx={{
                  ...fonts.sectionAboutCompany.breadCrumbs,
                }}
              >
                Про Компанию
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}