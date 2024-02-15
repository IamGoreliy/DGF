import { Box, Button, Container, Grid } from '@mui/material';
import {
  CustH2,
  CustDiv,
  CustH3,
  CustLi,
  CustTextField, CustH4, CustP, CustSpan
} from '../../styledComponent/StyledComponent';
import {useContext} from 'react';
import {Context} from '../../pages';

export const SectionLocation = () => {
  const windowSize = useContext(Context);
  return (
    <Box
      sx={{
        padding: 'clamp(80px,7.5vw,120px) 0 clamp(80px,11.25vw,180px)',
      }}
    >
      <Container
        maxWidth={'custXl'}
      >
        <CustH2
          color={'black'}
        >
          контакти
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
                  backgroundColor: '#0079C5',
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
                  bg={'#0067A8'}
                  bgcB={'transparent'}
                  colorB={'yellow'}
                >
                  ФОРМА ЗВОРОТНЬОГО ЗВ’ЯЗКУ
                </CustH3>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    padding: 'clamp(20px,5vw,40px) clamp(10px,2.5vw,20px)',
                  }}
                >
                  <CustH4
                    style={{
                      color: 'white',
                    }}
                  >
                    Спитайте нас, якщо залишились якісь запитання
                  </CustH4>
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
                      id="standard-required"
                      label="E-mail"
                      // defaultValue="Hello World"
                      variant="standard"
                    />
                    <Button
                      variant="outlined"
                      sx={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '40px',
                        color: 'yellow',
                        borderColor: 'yellow',
                        '&:hover': {
                          backgroundColor: 'yellow',
                          borderColor: 'yellow',
                          color: 'black',
                        },
                      }}
                    >
                      Надіслати
                    </Button>
                </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  minHeight: '500px',
                  backgroundColor: '#0C1A36',
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
                  bg={'#000D28'}
                  bgcB={'transparent'}
                  colorB={'yellow'}
                >
                  КОНТАКТНІ ДАНІ
                </CustH3>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'clamp(20px,5vw,40px) clamp(10px,2.5vw,20px)',
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                    }}
                  >
                    <CustP
                      color={'yellow'}
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '12px',
                        lineHeight: '100%',
                      }}
                    >
                      Юридична адреса:
                      <CustSpan
                        width={windowSize >= 900 ? 'auto' : '300px'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '156%',
                        }}
                      >
                        04112, м. Київ, вул. Авіаконструктора І.Сікорського 8
                      </CustSpan>
                    </CustP>
                    <Box
                      id={'ContactInfo'}
                      sx={{
                        display: {xs: 'block', md: 'flex'},
                        justifyContent: 'space-between',
                        marginTop: '20px',
                      }}
                    >
                      <CustP
                        display={'block'}
                        width={'140px'}
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        ГРАФІК РОБОТИ -
                        Контакт-центр:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          ПН - ПТ
                        </CustSpan>
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          з 09:00 до 20:00
                        </CustSpan>
                      </CustP>
                      <CustP
                        display={'block'}
                        width={'140px'}
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        ГРАФІК РОБОТИ - Адміністрація:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          ПН - ПТ
                        </CustSpan>
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          з 09:00 до 18:00
                        </CustSpan>
                      </CustP>
                    </Box>
                    <Box
                      sx={{
                        display: {xs: 'block', md: 'flex'},
                        justifyContent: 'space-between',
                        marginTop: '20px',
                      }}
                    >
                      <CustP
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        Телефон для звернень:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          +38 (067) 369-33-37
                        </CustSpan>
                      </CustP>
                      <CustP
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        Телефон для звернень:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          +38 (093) 170-86-47
                        </CustSpan>
                      </CustP>
                    </Box>
                    <Box
                      sx={{
                        display: {xs: 'block', md: 'flex'},
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <CustP
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        Телефон для звернень:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          +38 (093) 007-31-04
                        </CustSpan>
                      </CustP>
                      <CustP
                        color={'yellow'}
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '100%',
                        }}
                      >
                        Телефон для звернень:
                        <CustSpan
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '156%',
                          }}
                        >
                          +38 (044) 369-33-47
                        </CustSpan>
                      </CustP>
                    </Box>
                    <CustP
                      color={'yellow'}
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '12px',
                        lineHeight: '100%',
                      }}
                    >
                      Email:
                      <CustSpan
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '156%',
                        }}
                      >
                        info@dgf.com.ua
                      </CustSpan>
                    </CustP>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Box
            sx={{
              width: "100%",
              borderRadius: '20px',
              overflow: 'hidden',
          }}
          >
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%90%D0%B2i%D0%B0%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%D0%B0%20I%D0%B3%D0%BE%D1%80%D1%8F%20%D0%A1i%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,%208+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}