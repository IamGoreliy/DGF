import { Box, Container } from '@mui/material';
import { colorSite } from '../../../styledComponent/colorSite';
import { fonts } from '../../../styledComponent/fonts';
import Image from 'next/image';
import logo2 from '../../../../public/image/aboutCompany/logo2.svg';
import miniLog from '../../../../public/image/miniLog.svg';
import { CustH2, CustP, CustSpan } from '../../../styledComponent/StyledComponent';
import Link from 'next/link';
import firstImageMob from '../../../../public/image/aboutCompany/firstImageMobile.webp';
import secondImageMobile from '../../../../public/image/aboutCompany/secondImageMobile.webp';

export const MobileSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: colorSite.wrapperBoxControl,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
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
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Image
          src={firstImageMob}
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
      <Container
        maxWidth={'xs'}
      >
        <Box
          sx={{
            padding: '80px 20px',
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
            Контроль <br/> та нагляд
          </CustH2>
          <CustP
            display={'block'}
            fonts={fonts.sectionAboutCompany.textFonts}
            style={{
              marginTop: '20px'
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
      </Container>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Image
          src={secondImageMobile}
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
      <Container
        maxWidth={'xs'}
      >
        <Box
          sx={{
            padding: '80px 20px',
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
            Ліцензії <br/> та дозволи
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
      </Container>
    </Box>
  )
}