import { Box, Button, Container, ThemeProvider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { LocationSvg, Logosvg, MenuSvg, TelegranSvg, ViberSvg } from '../styledComponent/svgComponents';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { AuxiliaryHeadersMenusMob } from '../utils/auxiliaryHeadersMenusMob';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import {
  IconLocation,
  IconMobNavMenu,
  IconTelegram,
  IconViber
} from '../styledComponent/createSvg';
import { RenderSubMenuMobileNav } from '../components/RenderSubMenuMobileNav';
import { createContext, useState } from 'react';
import { RenderSubMenuPc } from '../components/RenderSubMenuPc';




export const WindowSeizeContext = createContext();

const svgHeaderIcon = [
  <IconLocation
    key={1}
    sx={{
      width: '100%',
      height: '100%',
      fill: '#0079C5',
    }}
  />,
  <IconTelegram
    key={2}
    sx={{
      width: '100%',
      height: '100%',
      fill: '#0079C5',
    }}
  />,
  <IconViber
    key={3}
    sx={{
      width: '100%',
      height: '100%',
      fill: '#0079C5',
    }}
  />
];

const pcNavLink = [
  {
    id: 1,
    name: 'ГОЛОВНА',
    link: '/',
  },
  {
    id: 2,
    name: 'ПРО КОМПАНІЮ',
    link: '/aboutCompany',
  },
  {
    id: 3,
    name: 'ПОЗИЧАЛЬНИКАМ',
    link: '/debtors',
  },
  {
    id: 4,
    name: 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО',
    link: '/InvestmentAndPartnership',
  },
  {
    id: 5,
    name: 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ',
    link: '/Offers',
  },
];

const mobNavLink = [
  {
    id: 1,
    name: '+38 (067) 369-33-37',
    link: '',
  },
  {
    id: 2,
    name: '+38 (093) 170-86-47',
    link: '',
  },
  {
    id: 3,
    name: 'ГОЛОВНА',
    link: '',
  },
  {
    id: 4,
    name: 'ПРО КОМПАНІЮ',
    link: '',
  },
  {
    id: 5,
    name: 'ПОЗИЧАЛЬНИКАМ',
    link: '',
  },
  {
    id: 6,
    name: 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО',
    link: '',
  },
  {
    id: 7,
    name: 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ',
    link: '',
  },
];

const animationOpenMenu = (state) => {
  if (state) {
    return {
      opacity: 1,
      display: 'block',
      scale: 1
    }
  }
  return {
    opacity: 0,
    display: 'block',
    scale: 0,
  }
}



export const NewHeaderNav = ({children}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMobileMenu, setSubMobileMenu] = useState(false);
  const [isOpenOfferModal, setIsOpenOfferModal] = useState(false);
  const windowSize = window.innerWidth;

  console.log(windowSize)

  return (
    <Box
      sx={{

      }}
    >
      <Box
        sx={{
          backgroundColor: '#111927',
          padding: '20px 0px',
        }}
      >
        <Container
          maxWidth={'custXl'}
        >
          {/*mobileMenu*/}
          <Box
            sx={{
              display: {xs: 'block', md: 'none'},
              position: 'relative',

            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: '10px',

              }}
            >
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{
                  minWidth: 0,
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'transparent',
                }}
              >
                <IconMobNavMenu
                  sx={{
                    fill: 'white',
                  }}
                />
              </Button>
              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: '280px',
                }}
              >
                <Logosvg
                  sx={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
              <Box
                  component={'ul'}
                  sx={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    columnGap: '20px',
                  }}
              >
                {svgHeaderIcon.map((ele, index) => {
                  return (
                    <Box
                      key={index}
                      component={'li'}
                      sx={{
                        width: '35px',
                        height: '35px',
                      }}
                    >
                      {ele}
                    </Box>
                  )
                })}
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50px',
                left: '30px',
                zIndex: 1,
                // display: mobileMenuOpen ? 'block' : 'none',
                ...animationOpenMenu(mobileMenuOpen),
                transition: 'opacity 500ms linear, scale 500ms linear',

              }}
            >
              <Box
                component={'ul'}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '20px',
                  listStyle: 'none',
                  padding: '30px 20px',
                  backgroundColor: '#111927',
                  borderRadius: '20px',

                }}
              >
              {mobNavLink.map(ele => {
                const {id, name, link} = ele;
                return (
                  <Box
                    key={id}
                    component={'li'}
                  >
                    { name === 'ПОЗИЧАЛЬНИКАМ'
                      ? <RenderSubMenuMobileNav
                        nameElement={name}
                        stateSubMenu={subMobileMenu}
                        setStateSubMenu={setSubMobileMenu}
                      />
                      : <Link
                        href={link}
                        style={{
                          textDecoration: "none",
                          color: 'white',
                        }}
                      >
                        {name}
                    </Link>}
                  </Box>
                )
              })}
              </Box>
            </Box>
          </Box>
          {/*pc version*/}
          <Box
            sx={{
              display: {xs: 'none', md: 'block'},
            }}
          >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Logosvg
                    sx={{
                      width: '200px',
                      height: '50px',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    columnGap: '30px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      columnGap: '10px',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        textAlign: 'end',
                      }}
                    >
                      04112, м. Київ <br/> вул. Авіаконструктора І.Сікорського 8
                    </Typography>
                    <IconLocation
                      sx={{
                        fill: '#0079C5',
                        width: '40px',
                        height: '40px',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: 'white',

                        }}
                      >
                        +38 (067) 369-33-37
                      </Typography>
                      <Typography
                        sx={{
                          color: 'white',
                        }}
                      >
                        +38 (093) 170-86-47
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        ml: '10px',
                        columnGap: '10px'
                      }}
                    >
                      <IconTelegram
                        sx={{
                          fill: '#0079C5',
                          width: '40px',
                          height: '40px',
                        }}
                      />
                      <IconViber
                        sx={{
                          fill: '#0079C5',
                          width: '40px',
                          height: '40px',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                 <Box
                  component={'ul'}
                  sx={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    columnGap: '20px',
                    alignItems: 'center',
                  }}
                 >
                   {pcNavLink.map(ele => {
                     const {id, name, link} = ele;
                     return (
                       <Box
                        key={id}
                        component={'li'}
                        sx={{
                          cursor: 'pointer',
                        }}
                       >
                         {name === 'ПОЗИЧАЛЬНИКАМ'
                           ? <RenderSubMenuPc
                             subMenuState={subMobileMenu}
                             changeStateSubMenu={setSubMobileMenu}
                             />
                           : <Link
                                 href={link}
                                 style={{
                                   display: 'block',
                                   fontSize: '1em',
                                   textDecoration: "none",
                                   color: 'white',
                                 }}
                              >
                               {name}
                              </Link>

                         }
                       </Box>
                     )
                   })}
                 </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '10px',
                    ml: '10px',
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: '#ffeb3b',
                      height: '40px',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'rgb(178, 164, 41)',

                      },
                    }}
                  >
                    Онлайн Оплата
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: '#ffeb3b',
                      height: '40px',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'rgb(178, 164, 41)',

                      },
                    }}
                  >
                    Написати листа
                  </Button>
                </Box>
              </Box>
          </Box>
          {/*🐶🐶🐶КНОПКА МЕНЮ ДЕШБОРДА 🐶🐶🐶*/}

          {/*<Box sx={{ flexGrow: 0 }}>*/}
          {/*  <Tooltip title="Open settings">*/}
          {/*    <IconButton*/}
          {/*      onClick={handleOpenUserMenu}*/}
          {/*      sx={{ p: 0 }}*/}
          {/*    >*/}
          {/*      /!*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*!/*/}
          {/*      x*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}
          {/*  <Menu*/}
          {/*    sx={{ mt: '45px' }}*/}
          {/*    id="menu-appbar"*/}
          {/*    anchorEl={anchorElUser}*/}
          {/*    anchorOrigin={{*/}
          {/*      vertical: 'top',*/}
          {/*      horizontal: 'right',*/}
          {/*    }}*/}
          {/*    keepMounted*/}
          {/*    transformOrigin={{*/}
          {/*      vertical: 'top',*/}
          {/*      horizontal: 'right',*/}
          {/*    }}*/}
          {/*    open={Boolean(anchorElUser)}*/}
          {/*    onClose={handleCloseUserMenu}*/}
          {/*  >*/}
          {/*    {settings.map(setting => {*/}
          {/*      return (*/}
          {/*        <MenuItem*/}
          {/*          key={setting}*/}
          {/*          onClick={handleCloseUserMenu}*/}
          {/*        >*/}
          {/*          <Typography*/}
          {/*            textAlign="center"*/}
          {/*          >*/}
          {/*            {setting}*/}
          {/*          </Typography>*/}
          {/*        </MenuItem>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </Menu>*/}
          {/*</Box>*/}
        </Container>
      </Box>
      <Box>
        <WindowSeizeContext.Provider value={{windowSize, setIsOpenOfferModal}}>
          {children}
        </WindowSeizeContext.Provider>
      </Box>
    </Box>
  )
}

