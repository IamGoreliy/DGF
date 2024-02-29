import { Button, Container } from '@mui/material';
import {Box} from '@mui/material';
import {Grid} from '@mui/material';
import payBg from '../../../public/image/homePage/sectionPayBgI.webp';
import {CustH2, CustH3, CustLi} from '../../styledComponent/StyledComponent';
import {editStylePayData} from './sectionPay/dataSectionPay';
import { useContext, useEffect, useState } from 'react';
import {Context} from '../../pages';
import {CustTextField} from '../../styledComponent/StyledComponent';



export const SectionPay = () => {
  const windowSize = useContext(Context);
  const dataPay = editStylePayData(windowSize);
  const currentUrl = window.location.pathname !== '/consequences';


  return (
    <Box
      id={'payAnchor'}
      sx={{
        padding: currentUrl ? 'clamp(80px,7.5vw,120px) 0 clamp(80px,11.25vw,180px)' : 'clamp(80px,7.5vw,0px) 0 clamp(80px,11.25vw,0px)',
        backgroundImage: currentUrl && `url(${payBg.src})`,
        backgroundSize: currentUrl && 'cover',
      }}
    >
     <Container
       maxWidth={'custXl'}

     >
       <CustH2
        color={'black'}
        widthB={'4rem'}
        heightB={'3px'}
        topB={'-10px'}
        leftB={'0px'}
        bgcB={'#0079C5'}
       >
         ЯК СПЛАТИТИ БОРГ
       </CustH2>
       <Grid
         container
         spacing={1}
         columns={1}
       >
         <Grid
           item
           xs={1}
           md={2}
         >
          <Box
            sx={{
              display: {xs: 'block', md:'flex'}
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: '500px',
                backgroundColor: '#0C1A36',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <CustH3
                content={'"01"'}
                color={'white'}
                widthB={'2px'}
                heightB={'2px'}
                topB={'5px'}
                leftB={'40px'}
                bg={'#000D28'}
                bgcB={'transparent'}
                colorB={'yellow'}
              >
                РЕКВІЗИТИ
              </CustH3>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  padding: 'clamp(20px,5vw,40px) clamp(10px,2.5vw,20px)',
                }}
              >
                <ul
                  style={{
                    padding: '0px 10px'
                  }}
                >
                  {dataPay.map(ele => {
                    return (
                      <CustLi
                        key={ele.id}
                        style={{
                          color: 'white',
                          display: windowSize >= 900 ? "flex" : 'block',
                          alignItems: 'center',
                        }}
                        mtEplusE={'10px'}
                      >
                        {ele.title}
                      </CustLi>
                    )
                  })}
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '500px',
                backgroundColor: '#0079C5',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <CustH3
                content={'"02"'}
                color={'white'}
                widthB={'1px'}
                heightB={'1px'}
                topB={'5px'}
                leftB={'40px'}
                bg={'#0067A8'}
                bgcB={'transparent'}
                colorB={'yellow'}
              >
                ОПЛАТА ОНЛАЙН
              </CustH3>
              <Box
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '50px',
                }}
              >

              <Box
                component='form'
                noValidate
                autoComplete="off"
                color='secondary'
                sx={{
                  width: 500,
                  maxWidth: '100%',

                }}
              >
                <CustTextField
                  fullWidth
                  required
                  id="standard-required"
                  label="ПІБ"
                  // defaultValue="Hello World"
                  variant="standard"
                />
                <Box
                  sx={{
                    display: {xs: 'block', md: 'flex'},
                  }}
                >
                  <CustTextField
                  required
                  id="standard-required"
                  label="ІПН"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  variant="standard"
                  sx={{
                    width: {xs: '100%', md: '50%'},
                    marginRight: {xs: '0px', md:'20px'}
                  }}
                  // textAlign={windowSize >= 900}

                />
                  <CustTextField
                    required
                    id="standard-number"
                    label="Номер договору"
                    type="number"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    variant="standard"
                    sx={{
                      width: {xs: '100%', md: '50%'},
                      marginLeft: {xs: '0px', md:'20px'}
                    }}
                    // textAlign={windowSize >= 900}
                  />
                </Box>
                <CustTextField
                  fullWidth
                  id="standard-number"
                  label="Номер телефону"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  variant="standard"
                  color='warning'
                />
                <CustTextField
                  fullWidth
                  required
                  id="standard-number"
                  label="Сума (грн)"
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  variant="standard"
                />
              </Box>
              <Button
                variant="outlined"
                sx={{
                  marginTop: '40px',
                  color: 'yellow',
                  borderColor: 'yellow',
                  '&:hover': {
                    borderColor: 'lime',
                    color: 'lime',
                  },
                }}
              >Оплатити карткою</Button>
              </Box>
            </Box>
          </Box>
         </Grid>
       </Grid>
     </Container>
    </Box>
  )
}