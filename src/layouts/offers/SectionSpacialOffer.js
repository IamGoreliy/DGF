import {Box, Container, Typography, Grid} from '@mui/material';
// import { offersData } from './offersData';
import Image from 'next/image';
import { Switch } from '../../styledComponent/svgComponents';
import { useState, useContext, useEffect } from 'react';
import { SubOfferMenu } from './subOfferMenu';
import { ModalWindowOffer } from './modalWindowOffer';
import {WindowSeizeContext} from '../headerNavigation';
import { Data } from '../../pages/Offers';



const openSubMenu = (id, menuState, fnChangeMenu) => {
  if (menuState === id) {
    fnChangeMenu(null);
  } else {
    fnChangeMenu(id);
  }
}

export const SectionSpacialOffer = () => {
  const offersData = useContext(Data);
  const {setIsOpenOfferModal: homeNoScrollFn} = useContext(WindowSeizeContext)
  const [whatOfferOpen, setWhatOfferOpen] = useState(null);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

  useEffect(() => {
    homeNoScrollFn(isOpenModalWindow);
  }, [isOpenModalWindow]);

  return (
    <>
      <Box
        sx={{
          marginTop: {xs: '30px', md:'70px'},
          padding: '30px 0 clamp(80px,11.25vw,180px)',
          width: '100%',
        }}
      >
        <Container
          maxWidth={'1620px'}
          sx={{
            maxWidth: '1620px',
          }}
        >
          <Grid
            container
            // spacing={0}
            rowGap={4}
            // gap={4}

          >
            {offersData?.map(offer => {
              const {id, title, url_img: urlImg, description} = offer;
              return (
                <Grid
                  key={id}
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  // xl={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}

                >
                  <Box
                    sx={{
                      width: {xs: '100%', md: '430px'},
                      height: '480px',
                      border: '1px solid #D9D9D9',
                      borderRadius: '10px',
                      padding: '20px 20px',
                      overflow: 'auto',
                      position: 'relative',
                      '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
                        borderRadius: '10px',
                        backgroundColor: '#F5F5F5',

                      },
                      '&::-webkit-scrollbar': {
                        width: '10px',
                        backgroundColor: '#F5F5F5',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        borderRadius: '10px',
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
                        // background: 'rgb(0,196,237)',
                        background: 'linear-gradient(180deg, rgba(0,196,237,1) 23%, rgba(255,239,0,1) 77%)',
                      },

                    }}
                  >
                    <Box
                      onClick={() => openSubMenu(id, whatOfferOpen, setWhatOfferOpen)}
                      component={'button'}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '50px',
                        height: '50px',
                        border: '1px solid #D9D9D9',
                        position: 'absolute',
                        zIndex: '1',
                        top: '20px',
                        right: '20px',
                        borderRadius: '5px',
                        '& > svg': {
                          fill: {xs: whatOfferOpen === id ? 'yellow' : 'black', md: whatOfferOpen === id ? 'yellow' : 'black'},
                        },
                        backgroundColor: {xs: whatOfferOpen === id ? '#76ed7694' : '#ffffff7a', md: whatOfferOpen === id ? '#76ed7694' : '#ffffff7a'},
                        '&:hover':{
                          backgroundColor: {xs: 'none', md: '#76ed7694'},
                        },
                        '&:hover > svg': {
                          fill: {xs: '', md: 'yellow'},
                        }
                      }}
                    >
                      <Switch
                        sx={{
                          fill: 'black',
                          width: '25px',
                          height: '25px',
                          // stroke: 'yellow',
                          // strokeWidth: '1px',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                      }}
                    >
                    <img
                      src={urlImg}
                      alt=''
                      // width={360}
                      // height={339}
                      style={{
                        display: "block",
                        width: '100%',
                        height: '194px',
                      }}
                    />
                    </Box>
                    <Box
                      sx={{
                        marginTop: '20px',
                        position: 'relative',
                        width: '100%',
                        minHeight: '45%',
                      }}
                    >
                      {whatOfferOpen === id && <SubOfferMenu switcherModal={setIsOpenModalWindow}/>}
                      <Typography
                        variant={'h3'}
                        sx={{
                          fontFamily: 'Raleway',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: 'clamp(16px,1.25vw,20px)',
                          lineHeight: '110%',
                          textTransform: 'uppercase',
                        }}
                      >
                        {title}
                      </Typography>
                      <Box
                        sx={{
                          marginTop: '20px',
                          fontFamily: 'Raleway',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: 'clamp(14px,1vw,16px)',
                          lineHeight: '1.4',
                          color: '#373737',
                        }}
                      >
                        {description}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
      {isOpenModalWindow && <ModalWindowOffer
        switcherModal={setIsOpenModalWindow}
        idOffer={whatOfferOpen}
      />}
    </>
  )
}

