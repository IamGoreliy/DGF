import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import {WindowSeizeContext} from '../headerNavigation';
import {useContext} from 'react';
import Image from 'next/image';
import miniLogo2 from '../../../public/image/logo2.svg';
import { colorSite } from '../../styledComponent/colorSite';
import Link from 'next/link';
import { CustH2 } from '../../styledComponent/StyledComponent';
import {clientsIcon} from './dataAboutClient';

export const AboutClients = () => {
  const windowSize = useContext(WindowSeizeContext);
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
            width: {xs: '100%', md: 'fit-content'},

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
            ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО
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
              Інвестиції та партнерство
            </Typography>
          </Breadcrumbs>
        }
      </Container>
      <Box
        sx={{
          marginTop: '70px',
          padding: '30px 0 clamp(80px,11.25vw,180px)',
        }}
      >
        <Container
          maxWidth={'custXl'}
        >
          <CustH2
            color={'black'}
            bgcB={'#0079C5'}
            topB={'-20px'}
            style={{
              textTransform: 'uppercase'
            }}
          >
            наші клієнти
          </CustH2>
          <Box
            sx={{
              width: '100%',
              overflow: {xs: 'scroll', md: 'auto'}
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                width: {xs: '1340px', md: '100%'}
              }}
            >
              {clientsIcon?.map(client => {
                const {id, logo} = client;
                return (
                  <Grid
                    key={id}
                    item
                    xs={2}
                    md={2}

                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #D9D9D9',
                        borderRadius: '5px',
                        // width: '250px',
                        height: '122px',
                      }}
                    >
                      <Image
                        src={logo}
                        alt=''
                        style={{
                          width: '180px',
                          height: 'auto'
                        }}
                      />
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}