import { Box, Container, Typography } from '@mui/material';
import {colorSite} from '../../styledComponent/colorSite';
import {fonts} from '../../styledComponent/fonts';
import {Breadcrumbs} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo2 from '../../../public/image/logo2.svg';
import miniLog from '../../../public/image/miniLog.svg';
import firstImage from '../../../public/image/aboutCompany/firstImage.webp';
import firstImageMob from '../../../public/image/aboutCompany/firstImageMobile.webp';
import { CustH2, CustP, CustSpan } from '../../styledComponent/StyledComponent';
import secondImage from '../../../public/image/aboutCompany/secondImage.webp';
import secondImageMobile from '../../../public/image/aboutCompany/secondImageMobile.webp';
import { useContext } from 'react';
import { WindowSeizeContext } from '../headerNavigation';

export const SectionControlAndSurveillance = () => {
  const windowSize = useContext(WindowSeizeContext);
  const isMobileSize = windowSize <= 900;
  return (
    <Box
      sx={{
        backgroundColor: colorSite.backgroundColorSectionControl,
        padding: {xs: '0px', md:'min(1.875vw,0px) 0 clamp(80px,11.25vw,180px)'},
      }}
    >
      <Box
        sx={{
          backgroundColor: { xs: colorSite.colorBlack, md: 'inherit'},
        }}
      >
        <Container
          maxWidth={'custXl'}
          disableGutters={isMobileSize}
        >
          <Box
            sx={{
              position: 'relative',
              width: {xs: '100%', md: 'fit-content'},
              padding: '20px clamp(15px,3.125vw,50px) 20px calc(15px + clamp(25px,3.125vw,50px))',
              backgroundColor: colorSite.colorBlack,
              color: colorSite.colorTextWhite,
              ...fonts.sectionAboutCompany.titleAboutCompany,
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
          { !isMobileSize &&
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
          }
        </Container>

        <Container
          maxWidth={'custXl'}
          disableGutters={isMobileSize}
        >
          <Box
            sx={{
              display: {xs: 'block', md: 'flex'},
              flexDirection: 'row-reverse',
              width: {xs: '100%', md: '90%'},
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: !isMobileSize && '100px',
              backgroundColor: colorSite.colorBlack,
            }}
          >
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Image
                src={windowSize >= 900 ? firstImage :firstImageMob}
                alt=''
                style={{
                  width: '100%',
                }}
              />
              <Image
                src={miniLog}
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
                padding: {xs: '80px 20px', md: '90px clamp(20px,5vw,80px)'},
                width: {xs: '100%', md: '80%'},
                display: {xs: 'block', md: 'flex'},
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <CustH2
                bgcB={colorSite.underliningBeforeYellow}
                topB={'-20px'}
                style={{
                  margin: '0px',
                  ...fonts.sectionAboutCompany.titleControl,
                }}
              >
                Контроль {isMobileSize && <br/>} та нагляд
              </CustH2>
              <CustP
                display={'block'}
                fonts={fonts.sectionAboutCompany.textFonts}
                style={{
                  marginTop: '20px',
                }}
              >
                <CustSpan>
                  До 2020 року функцію нагляду та контролю діяльності компанії виконувала Національна комісія, що здійснює державне регулювання у сфері ринків фінансових послуг (НАЦКОМФІНПОСЛУГ).
                </CustSpan>
                <CustSpan
                  style={{
                    marginTop: '20px'
                  }}
                >
                  З 1 липня 2020 року Національний банк України перейняв на себе функції регулятора ринку небанківських фінансових послуг: страхових, лізингових, факторингових компаній, кредитних спілок, ломбардів та інших фінансових компаній.
                </CustSpan>
                <CustSpan
                  style={{
                    marginTop: '20px'
                  }}
                >
                  Компанія здійснює господарську діяльність виключно з дотриманням діючого законодавства України, норм та розпоряджень регулятора.
                </CustSpan>
                <CustSpan
                  style={{
                    marginTop: '20px'
                  }}
                >
                  Якщо ви вважаєте, що в ході своєї діяльності, представниками Компанії були порушені Ваші права, можете подати скаргу скориставшись формою на сайті &nbsp;
                  <Link
                    href={'/#ContactInfo'}
                    style={{
                      color: colorSite.linkUnderline,
                    }}
                  >
                    «Зворотній зв’язок»
                  </Link>
                  &nbsp;та мати впевненість, що дане звернення не залишиться без уваги, а у випадку виявлення порушень – будуть вжиті відповідні заходи впливу.
                </CustSpan>
              </CustP>
            </Box>
          </Box>
        </Container>

        <Container
          maxWidth={'custXl'}
          disableGutters={isMobileSize}
          sx={{
            marginTop: {xs: '0px', md: '150px'},
          }}
        >
          <Box
            sx={{
              display: {xs: 'block', md: 'flex'},
              // flexDirection: '',
              width: {xs: '100%', md: '90%'},
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: !isMobileSize && '100px',

            }}
          >
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Image
                src={windowSize >= 900 ? secondImage :secondImageMobile}
                alt=''
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
              <Image
                src={miniLog}
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
                padding: {xs: '80px 20px', md: '90px clamp(20px,5vw,80px)'},
                width: {xs: '100%', md: '80%'},
                display: {xs: 'block', md: 'flex'},
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: colorSite.colorBlack,
              }}
            >
              <CustH2
                bgcB={colorSite.underliningBeforeYellow}
                topB={'-20px'}
                style={{
                  margin: '0px',
                  ...fonts.sectionAboutCompany.titleControl,
                }}
              >
                Ліцензії {isMobileSize && <br/>} та дозволи
              </CustH2>
              <CustP
                fonts={fonts.sectionAboutCompany.textFonts}
                display={'block'}
                style={{
                  marginTop: '20px'
                }}
              >
                <CustSpan>
                  ТОВ "ДІДЖИ ФІНАНС" має діючу безстрокову ліцензію на&nbsp;
                  <Link
                    href={'/'}
                    style={{
                      color: colorSite.linkUnderline,
                    }}
                  >
                    НАДАННЯ КОШТІВ У ПОЗИКУ, В ТОМУ ЧИСЛІ І НА УМОВАХ ФІНАНСОВОГО КРЕДИТУ
                  </Link>
                  &nbsp;та ліцензію на&nbsp;
                  <Link
                    href={'/'}
                    style={{
                      color: colorSite.linkUnderline,
                    }}
                  >
                    НАДАННЯ ПОСЛУГ З ФАКТОРИНГУ
                  </Link>
                  &nbsp;, що видана на підставі розпорядження нацкомфінпослуг від 31.03.2020р. за № 594
                </CustSpan>
                <CustSpan
                  style={{
                    marginTop: '20px',
                  }}
                >
                  Комплексна інформаційна система Національного банку (
                  <Link
                    href={'/'}
                    style={{
                      color: colorSite.linkUnderline,
                    }}
                  >
                    КІС НБУ
                  </Link>
                  ), дає можливість в будь-який момент перевірити наявність та дійсність вказаних ліцензій.
                </CustSpan>
              </CustP>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}