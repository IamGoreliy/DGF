import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import { colorSite } from '../styledComponent/colorSite';
import Image from 'next/image';
import miniLogo2 from '../../public/image/logo2.svg';
import Link from 'next/link';
import { useContext } from 'react';
import { WindowSeizeContext } from './headerNavigation';

export const LayoutAuxiliaryPage = ({children, title = 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО' }) => {
  const { windowSize } = useContext(WindowSeizeContext);
  const isMobile = windowSize <= 900;
  return (
    <Box>
      <Container
        maxWidth={'custXl'}
        disableGutters={isMobile}
      >
        <Box
          sx={{
            position: 'relative',
            padding: '20px clamp(15px,3.125vw,50px) 20px calc(15px + clamp(25px,3.125vw,50px))',
            backgroundColor: colorSite.wrapperBoxControl,
            color: 'white',
            width: {xs: '100wv', md: 'fit-content'},

          }}
        >
          <Typography
            variant={'h1'}
            sx={{
              fontFamily: 'Raleway',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 'clamp(30px,3.889vw,35px)',
              lineHeight: '110%',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Image
            src={miniLogo2}
            alt='logo'
            style={{
              position: 'absolute',
              height: '100%',
              top: '0px',
              left: '0px',
            }}
          />
        </Box>
        {
          !isMobile &&
          <Breadcrumbs
            sx={{
              marginTop: '20px',
            }}
            separator={'|'}
          >
            <Link
              href={'/'}
              style={{
                textDecoration: 'none',
                color: '#0079C5',
              }}
            >
              Головна
            </Link>
            <Typography>
              {title}
            </Typography>
          </Breadcrumbs>
        }
      </Container>
      {children}
    </Box>
  )
}