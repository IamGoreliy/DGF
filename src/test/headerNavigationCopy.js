// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import Menu from '@mui/material/Menu';
// import {Tooltip } from '@mui/material';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import styled from '@emotion/styled';
// import { Logosvg, LocationSvg, TelegranSvg, ViberSvg, MenuSvg } from 'src/styledComponent/svgComponents';
// import { CustSvg } from '../styledComponent/StyledComponent';
// import { mobileNavSwitch } from '../utils/mobileNavSwitch';
// import {useRouter } from 'next/navigation';
// import { createContext, useState } from 'react';
// import { lime, yellow } from '@mui/material/colors';
// import {createTheme, ThemeProvider} from '@mui/material';
// import { AuxiliaryHeadersMenusMob } from '../utils/auxiliaryHeadersMenusMob';
// import Link from 'next/link';
//
// const colorYellow = yellow[500];
//
// const themaYellow = createTheme({
//   palette: {
//     info: {
//       main: yellow[500],
//       light: lime[500],
//       contrastText: lime[700],
//     }
//   }
// })
//
// export const WindowSeizeContext = createContext();
//
// const pages = ['ГОЛОВНА', 'ПРО КОМПАНІЮ', 'ПОЗИЧАЛЬНИКАМ', 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО', 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ'];
// const subPagesBtn = ['ПИТАННЯ ТА ВІДПОВІДІ', 'НАСЛІДКИ НЕСПЛАТИ БОРГУ', 'ІДЕНТИФІКАЦІЯ БОРГУ'];
// const supportPages = ['Онлайн оплата', 'Написати листа'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//
// const BtnCust = styled.button`
//     display: block;
//     width: 150px;
//     height: 45px;
//     background-color: white;
//     border-radius: 5px;
//     & + & {
//       margin-left: 10px;
//     }
//     &:hover {
//     background-color: yellow;
//     color: #0C1A36;
//     }
//      &:active {
//     background-color: yellow;
//     color: #0C1A36;
//      }
// `
// const ContactInfo = styled.span`
//     display: block;
//     text-align: right;
// `
//
// const PopupMenuBtn = styled.button`
//     width: 200px;
//     height: 50px;
//     border-radius: 10px;
//     background-color: white;
//     border-color: white;
//     color: #0C1A36;
//     & + & {
//       margin-top: 10px;
//     }
//     &:hover {
//       background-color: yellow;
//       color: #0C1A36;
//     }
//     &:active {
//       background-color: yellow;
//       color: #0C1A36;
//     }
// `
//
// const SpanNewLine = styled.span`
//     display: block
//
// `
//
//
//
// export function Layout({children}) {
//   const [isOpenMobNav, setIsOpenMobNav] = React.useState(false);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [isOpenOfferModal, setIsOpenOfferModal] = useState(false);
//   const router = useRouter();
//   const windowSize = window.innerWidth;
//
//
//
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//     setIsOpenMobNav(!isOpenMobNav);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//
//   };
//
//   const handleCloseNavMenu = (nameBtn) => {
//     setAnchorElNav(null);
//     const urlForLink = mobileNavSwitch(nameBtn);
//     setIsOpenMobNav(!isOpenMobNav);
//     if(urlForLink !== 'нет страницы') {
//       router.push(`${urlForLink}`);
//
//     }
//   };
//
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//
//   return (
//     <Box
//       sx={{
//         position: isOpenOfferModal ? 'fixed' : 'static',
//         overflowY: isOpenOfferModal ? 'scroll' : 'auto',
//       }}
//     >
//       <AppBar
//         position="static"
//         sx={{backgroundColor: 'black'}}
//       >
//         <Container
//           maxWidth="custXl"
//           disableGutters={windowSize <= 900}
//         >
//         <Box sx={{
//           display: { xs: 'none', md: 'flex'},
//           justifyContent: 'space-between',
//           height: {xs: 'none', md: '60px'},
//           mt: { xs: 'none', md: 2},
//           paddingLeft: {xs: 'none', md: '0px'},
//         }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               <Logosvg
//                 style={{
//                   width: '200px',
//                   height: '41px'}}
//               />
//             </Typography>
//             <Box
//               sx={{
//                 display: 'flex'
//               }}
//             >
//                   <Box
//                     sx={{
//                     display: 'flex',
//                     marginRight: '30px'
//                     }}
//                   >
//                       <Typography>
//                           <ContactInfo>04112, м. Київ</ContactInfo>
//                           <span>вул. Авіаконструктора І.Сікорського 8</span>
//                       </Typography>
//                       <Link href='/#locationAnchor'>
//                         <LocationSvg
//                           svgurl={
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
//                               <g id="location">
//                                 <path
//                                   d="M15.7143 0C11.5481 0.00491496 7.55399 1.6621 4.60805 4.60804C1.66212 7.55397 0.00493168 11.5481 1.67184e-05 15.7143C-0.00497313 19.1189 1.10713 22.4311 3.16573 25.1429C3.16573 25.1429 3.5943 25.7071 3.6643 25.7886L15.7143 40L27.77 25.7814C27.8329 25.7057 28.2629 25.1429 28.2629 25.1429L28.2643 25.1386C30.3219 22.428 31.4335 19.1173 31.4286 15.7143C31.4237 11.5481 29.7665 7.55397 26.8206 4.60804C23.8746 1.6621 19.8805 0.00491496 15.7143 0ZM20.8572 22.8571L15.7143 19.5843L10.5714 22.8571L11.4286 17.0371L7.14287 13.1043L13.1429 12.38L15.7143 7.14286L18.4457 12.3814L24.2857 13.1043L20 17.0371L20.8572 22.8571Z"/>
//                               </g>
//                             </svg>
//                           }
//                           sx={{
//                             width: '31px',
//                             height: '40px',
//                             fill: '#0079C5',
//                             marginLeft: '10px',
//                             '&:hover': {
//                               fill: 'yellow'
//                             }
//                           }}
//                         />
//                       </Link>
//                   </Box>
//               <Box
//                 sx={{
//                   display: 'flex'
//                 }}>
//                 <Typography>
//                   +38 (067) 369-33-37
//                   <br/>
//                   +38 (093) 170-86-47
//                 </Typography>
//                 <a href="https://t.me/dgfnsdgfnss" target="_blank">
//                   <CustSvg
//                     svgurl={
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
//                         <g id="telegram">
//                           <path
//                             d="M20 0.625C9.29625 0.625 0.625 9.2975 0.625 20C0.625 30.7025 9.2975 39.375 20 39.375C30.7038 39.375 39.375 30.7025 39.375 20C39.375 9.2975 30.7025 0.625 20 0.625ZM29.5163 13.8988L26.3363 28.8838C26.1012 29.9463 25.4688 30.2038 24.5863 29.7038L19.7425 26.1337L17.4062 28.3838C17.1488 28.6413 16.93 28.86 16.43 28.86L16.7738 23.93L25.75 15.82C26.1413 15.4762 25.6637 15.2812 25.1475 15.625L14.0538 22.6087L9.2725 21.1162C8.23375 20.7887 8.21 20.0775 9.49125 19.5775L28.1713 12.3738C29.0388 12.0613 29.7962 12.585 29.515 13.8975L29.5163 13.8988Z"/>
//                         </g>
//                       </svg>
//                     }
//                     sx={{
//                       width: '40px',
//                       height: '40px',
//                       fill: '#0079C5',
//                       marginLeft: '10px',
//                       '&:hover': {
//                         fill: 'yellow'
//                       }
//                     }}
//                   />
//                 </a>
//                 <a href="viber://chat?number=%2B380676681425" target="_blank">
//                   <ViberSvg
//                     svgurl={
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
//                         <g id="viber">
//                           <path fillRule="evenodd" clipRule="evenodd"
//                                 d="M0.333984 19.709C0.333984 30.4098 9.00817 39.084 19.709 39.084C30.4098 39.084 39.084 30.4098 39.084 19.709C39.084 9.00817 30.4098 0.333984 19.709 0.333984C9.00817 0.333984 0.333984 9.00817 0.333984 19.709ZM20.639 11.585L20.639 11.585C20.7165 11.5908 20.794 11.5966 20.854 11.6063C25.2134 12.2999 27.2207 14.4311 27.7767 18.9688C27.7849 19.0343 27.7862 19.111 27.7875 19.194V19.1941L27.7883 19.24L27.7884 19.2406C27.7942 19.5954 27.8062 20.3308 28.573 20.3463H28.5963C28.7016 20.3519 28.8069 20.3349 28.9052 20.2965C29.0034 20.2581 29.0923 20.1991 29.1659 20.1235C29.4042 19.8658 29.3887 19.4841 29.3752 19.1741L29.3749 19.17V19.1699C29.3711 19.0978 29.3674 19.0277 29.3693 18.9668C29.4236 14.3265 25.5331 10.1183 21.042 9.96327L20.9877 9.96521C20.9704 9.96776 20.9529 9.96905 20.9354 9.96908C20.8926 9.96908 20.8392 9.96551 20.7835 9.9618L20.7765 9.96133C20.6992 9.95427 20.6217 9.95039 20.544 9.94971C19.8291 9.94971 19.6935 10.4728 19.676 10.7867C19.6373 11.5094 20.3135 11.5617 20.639 11.585ZM27.5655 24.8316C27.4722 24.7586 27.3799 24.6843 27.2885 24.6088C26.832 24.2303 26.3472 23.8803 25.8781 23.5416L25.816 23.4967C25.7138 23.4233 25.6118 23.3496 25.5098 23.2758C24.8821 22.8225 24.3183 22.5996 23.7855 22.5996C23.0686 22.5996 22.4428 23.0104 21.9255 23.8183C21.6968 24.1748 21.4178 24.3492 21.0768 24.3492C20.8388 24.3407 20.6054 24.2806 20.3929 24.1729C18.3682 23.2235 16.9209 21.7704 16.0936 19.8523C15.6945 18.9223 15.8223 18.3178 16.5276 17.8237C16.9267 17.5447 17.6707 17.0235 17.6184 16.0257C17.5603 14.8923 15.1365 11.4823 14.1154 11.0948C13.6798 10.9304 13.1995 10.929 12.763 11.0909C11.5908 11.4978 10.748 12.2146 10.3276 13.1582C9.92072 14.0727 9.9401 15.1441 10.3818 16.2601C11.6548 19.488 13.4431 22.3013 15.7022 24.6224C17.911 26.8951 20.6273 28.7551 23.7738 30.154C24.0503 30.277 24.3415 30.3446 24.5572 30.3946L24.5721 30.3981L24.7562 30.4446C24.7814 30.4518 24.8074 30.4557 24.8337 30.4562H24.8588C26.3391 30.4562 28.1158 29.0612 28.6622 27.4686C29.1407 26.0737 28.267 25.3859 27.5657 24.8337L27.5655 24.8336V24.8316ZM21.2938 15.272C21.042 15.2778 20.513 15.2914 20.327 15.8455C20.2418 16.1051 20.2515 16.3299 20.358 16.514C20.515 16.7852 20.8172 16.8685 21.0904 16.9131C22.0824 17.0778 22.5939 17.6455 22.6947 18.6956C22.7431 19.1877 23.0628 19.5287 23.4735 19.5287C23.5046 19.5294 23.5356 19.5281 23.5665 19.5248C24.0606 19.4628 24.2989 19.0889 24.2776 18.4108C24.2853 17.7016 23.9269 16.8995 23.3166 16.2601C22.7043 15.6169 21.9662 15.2546 21.2938 15.272ZM26.7692 18.5543C26.7925 15.6635 24.4074 13.013 21.4527 12.6468L21.259 12.6178C21.1108 12.5883 20.9604 12.5715 20.8095 12.5674C20.203 12.5674 20.0422 13.0053 19.9996 13.2668C19.9754 13.3755 19.9732 13.4878 19.9932 13.5973C20.0132 13.7068 20.0549 13.8112 20.1158 13.9043C20.3137 14.1801 20.6573 14.2318 20.9375 14.2739L20.9528 14.2763L20.9837 14.2805C21.0557 14.2904 21.1235 14.2997 21.1795 14.315C23.8358 14.9253 24.731 15.8883 25.1669 18.6066C25.1785 18.6744 25.1824 18.7558 25.1863 18.8429C25.2056 19.1665 25.2463 19.8427 25.9516 19.8427C26.0097 19.8427 26.0717 19.8388 26.1376 19.8272C26.7933 19.7247 26.7731 19.1085 26.7634 18.8115L26.7634 18.81C26.7585 18.7384 26.7585 18.6665 26.7634 18.5949C26.7655 18.5821 26.7668 18.5692 26.7673 18.5562L26.7692 18.5543Z"/>
//                         </g>
//                       </svg>
//                     }
//                     sx={{
//                       width: '40px',
//                       height: '40px',
//                       fill: '#0079C5',
//                       marginLeft: '10px',
//                       '&:hover': {
//                         fill: 'yellow'
//                       }
//                     }}
//                   />
//                 </a>
//               </Box>
//             </Box>
//           </Box>
//           <Toolbar disableGutters
//                    sx={{
//                      height: '75px',
//                    }}
//           >
//             <Box
//               sx={{
//               flexGrow: 1,
//               display: { xs: 'flex', md: 'none' },
//             }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuSvg sx={{ fill: 'white' }}/>
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 // 🦄🦄🦄используется ввиде якоря🦄🦄🦄
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left'
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left'
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                   '& .MuiMenu-list': {
//                     backgroundColor: '#0C1A36',
//                     color: 'white',
//                   }
//                 }}
//               >
//                 <Box
//                   sx={{
//
//                   }}
//                 >
//                 <Box
//                   sx={{
//                     padding: '10px'
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       '& + &': {
//                         marginTop: '10px'
//                       }
//                     }}
//                   >
//                     <a href='tel:+380673693337'
//                        style={{
//                          textDecoration: 'none',
//                          color: 'white',
//                        }}
//                     >
//                       +38 (067) 369-33-37
//                     </a>
//                   </Typography>
//                   <Typography
//                     sx={{
//                       '& + &': {
//                         marginTop: '10px'
//                       }
//                     }}
//                   >
//                     <a
//                       href="tel:+380931708647"
//                       style={{
//                         textDecoration: 'none',
//                         color: 'white',
//                       }}
//                     >
//                       +38 (093) 170-86-47
//                     </a>
//                   </Typography>
//                 </Box>
//                   {pages.map((page) => (
//                   <MenuItem
//                     key={page}
//                   >
//                     {page === 'ПОЗИЧАЛЬНИКАМ'
//                       ?
//                       <AuxiliaryHeadersMenusMob
//                         auxiliaryMenuButtons={subPagesBtn}
//                         pageBtn={page}
//                         handlePage={handleCloseNavMenu}
//                       />
//                       :
//                       <Typography
//                         textAlign="center"
//                         onClick={() => handleCloseNavMenu(page)}
//                       >
//                         {page}
//                       </Typography>
//                         }
//                   </MenuItem>
//                 ))}
//                 <MenuItem
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center'
//                 }}>
//                   <PopupMenuBtn
//                     onClick={() => {
//                       setAnchorElNav(null);
//                       router.push('/#payAnchor');
//                     }}
//                   >
//                     Онлайн оплата
//                   </PopupMenuBtn>
//                   <PopupMenuBtn
//                   >
//                     <a
//                       href='mailto:info@dgf.com.ua/'
//                       style={{
//                         textDecoration: "none",
//                         color: "inherit",
//                       }}
//                     >
//                       Написати листа
//                     </a>
//                   </PopupMenuBtn>
//
//                 </MenuItem>
//                 </Box>
//               </Menu>
//             </Box>
//             <Box sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 3,
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}>
//               <Typography
//                 variant="h5"
//                 noWrap
//                 component="a"
//                 href="#app-bar-with-responsive-menu"
//                 sx={{
//
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '0.3rem',
//                   color: 'inherit',
//                   textDecoration: 'none'
//                 }}
//               >
//                 <Logosvg
//                   style={{
//                     width: '200px',
//                     height: '41px'
//                   }}
//                 />
//               </Typography>
//               <Link href='/#locationAnchor'>
//                 <LocationSvg
//                   sx={{
//                     width: '30px',
//                     height: '30px',
//                     fill: '#0079C5'
//                   }}
//                 />
//               </Link>
//               <a href="https://t.me/dgfnsdgfnss" target="_blank">
//                 <TelegranSvg
//                   sx={{
//                     width: '30px',
//                     height: '30px',
//                     fill: '#0079C5'
//                   }}
//                 />
//               </a>
//               <a href='viber://chat?number=%2B380676681425' target='_blank'>
//               <ViberSvg
//                 sx={{
//                   width: '30px',
//                   height: '30px',
//                   fill: '#0079C5'
//                 }}
//               />
//               </a>
//             </Box>
//
//             <Box
//               sx={{
//                 // flexGrow: 1,
//                 display: { xs: 'none', md: 'flex'},
//                 // justifyContent: 'space-between'
//             }}
//             >
//               <Box
//                 sx={{
//                   display: { xs: 'none', md: 'flex'},
//                   alignItems: 'center',
//               }}
//               >
//                 {/*🦄pc версия меню*/}
//               {pages.map((page) => (
//                 <Box
//                   key={page}
//                   sx={{
//                     color: 'white',
//                     cursor: 'pointer',
//                 }}
//                 >
//                   {
//                     page === 'ПОЗИЧАЛЬНИКАМ'
//                       ?
//                       <AuxiliaryHeadersMenusMob
//                         auxiliaryMenuButtons={subPagesBtn}
//                         pageBtn={page}
//                         handlePage={handleCloseNavMenu}
//                       />
//                       :
//                       <Typography
//                         onClick={ () => handleCloseNavMenu(page)}
//                         sx={{
//                           fontSize: '0.8rem',
//                           '&: hover': {
//                             color: 'yellow',
//                           }
//                         }}
//                       >
//                         {page}
//                       </Typography>
//                   }
//
//                 </Box>
//               ))}
//               </Box>
//               <Box
//                 sx={{
//                   display: { xs: 'none', md: 'flex'},
//                   // marginLeft: windowSize >= 1600 ? '100px' : '30px',
//               }}
//               >
//                 <ThemeProvider
//                   theme={themaYellow}
//                 >
//                 <Button
//                   variant={'contained'}
//                   // onClick={handleCloseNavMenu}
//                   onClick={() => router.push('/#payAnchor')}
//                   color={"info"}
//                   sx={{
//                     my: 2,
//                     color: 'black',
//                     display: 'block',
//                     // '& + & ': {
//                     //   marginLeft: '30px',
//                     // }
//                 }}
//                 >
//                   Онлайн оплата
//                 </Button>
//                 <Button
//                   variant={'contained'}
//                   // onClick={handleCloseNavMenu}
//                   color={"info"}
//                   sx={{
//                     my: 2,
//                     color: 'black',
//                     display: 'block',
//                     '& + & ': {
//                       marginLeft: '30px',
//                     }
//                   }}
//                 >
//                   <a
//                     href='mailto:info@dgf.com.ua/'
//                     style={{
//                       textDecoration: 'none',
//                       color: "inherit"
//                     }}
//                   >
//                     Написати листа
//                   </a>
//                 </Button>
//                 </ThemeProvider>
//               </Box>
//             </Box>
//
//             {/*🐶🐶🐶КНОПКА МЕНЮ ДЕШБОРДА 🐶🐶🐶*/}
//
//             {/*<Box sx={{ flexGrow: 0 }}>*/}
//             {/*  <Tooltip title="Open settings">*/}
//             {/*    <IconButton*/}
//             {/*      onClick={handleOpenUserMenu}*/}
//             {/*      sx={{ p: 0 }}*/}
//             {/*    >*/}
//             {/*      /!*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*!/*/}
//             {/*      x*/}
//             {/*    </IconButton>*/}
//             {/*  </Tooltip>*/}
//             {/*  <Menu*/}
//             {/*    sx={{ mt: '45px' }}*/}
//             {/*    id="menu-appbar"*/}
//             {/*    anchorEl={anchorElUser}*/}
//             {/*    anchorOrigin={{*/}
//             {/*      vertical: 'top',*/}
//             {/*      horizontal: 'right',*/}
//             {/*    }}*/}
//             {/*    keepMounted*/}
//             {/*    transformOrigin={{*/}
//             {/*      vertical: 'top',*/}
//             {/*      horizontal: 'right',*/}
//             {/*    }}*/}
//             {/*    open={Boolean(anchorElUser)}*/}
//             {/*    onClose={handleCloseUserMenu}*/}
//             {/*  >*/}
//             {/*    {settings.map(setting => {*/}
//             {/*      return (*/}
//             {/*        <MenuItem*/}
//             {/*          key={setting}*/}
//             {/*          onClick={handleCloseUserMenu}*/}
//             {/*        >*/}
//             {/*          <Typography*/}
//             {/*            textAlign="center"*/}
//             {/*          >*/}
//             {/*            {setting}*/}
//             {/*          </Typography>*/}
//             {/*        </MenuItem>*/}
//             {/*      )*/}
//             {/*    })}*/}
//             {/*  </Menu>*/}
//             {/*</Box>*/}
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Box>
//         <WindowSeizeContext.Provider value={{windowSize, setIsOpenOfferModal}}>
//           {children}
//         </WindowSeizeContext.Provider>
//       </Box>
//     </Box>
//   );
// }
//
