import { Box, Container, Typography } from '@mui/material';
import { CustH2 } from '../../styledComponent/StyledComponent';
import { colorSite } from '../../styledComponent/colorSite';
import payBg from '../../../public/image/homePage/sectionPayBgI.webp';
import sectionImgPc from '../../../public/image/aboutCompany/threeImage.webp';
import sectionImageMob from '../../../public/image/aboutCompany/threeImageMob.webp';
import miniLogo from '../../../public/image/miniLog.svg';
import Image from 'next/image';
import {WindowSeizeContext} from '../headerNavigation';
import { useContext } from 'react';

export const SectionInfoSettlementOfOverdueDebt = () => {
  const { windowSize } = useContext(WindowSeizeContext);
  return (
    <Box
      sx={{
        backgroundImage: `url(${payBg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: {xs: '0px', md: 'clamp(40px,11.25vw,180px) 0'},
      }}
    >
      <Container
        maxWidth={'custXl'}
        disableGutters={windowSize <= 900}

      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},

            justifyContent: 'space-between',
            backgroundColor: colorSite.wrapperBoxControl,
          }}
        >
          <Box
            sx={{
              padding: '80px clamp(20px,5vw,80px)',
              color: 'white',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 'clamp(15px,1vw,16px)',
              lineHeight: '156%',
            }}
          >
            <CustH2
              bgcB={'yellow'}
              topB={'-20px'}
              style={{
                marginBottom: '70px'
              }}
            >
              ІНФОРМАЦІЯ ЩОДО ВРЕГУЛЮВАННЯ ПРОСТРОЧЕНОЇ ЗАБОРГОВАНОСТІ
            </CustH2>
            <Typography
              sx={{
                '& + &': {
                  marginTop: '15px'
                }
              }}
            >
              З інформацією щодо врегулювання простроченої заборгованості ТОВ «ДІДЖИ ФІНАНС» ви можете ознайомитися за посиланням:
            </Typography>
            <Typography
              sx={{
                '& + &': {
                  marginTop: '15px'
                }
              }}
            >
              <a
                href={'google.com.ua'}
                target='_blank'
                style={{
                  color: 'yellow',
                }}
              >
                Порядок взаємодії із споживачем фінансових послуг та іншими особами при врегулюванні простроченої заборгованості (вимоги щодо етичної поведінки)
              </a>
            </Typography>
            <Typography
              sx={{
                '& + &': {
                  marginTop: '15px'
                }
              }}
            >
              <a
                href={'google.com.ua'}
                target='_blank'
                style={{
                  color: 'yellow',
                }}
              >
                Порядок відступлення права вимоги за договором про споживчий кредит новому кредитодавцю
              </a>
            </Typography>
            <Typography
              sx={{
                '& + &': {
                  marginTop: '15px'
                }
              }}
            >
              <a
                href={'google.com.ua'}
                target='_blank'
                style={{
                  color: 'yellow',
                }}
              >
                Порядок і спосіб погашення простроченої заборгованості
              </a>
            </Typography>
            <Typography
              sx={{
                '& + &': {
                  marginTop: '15px'
                }
              }}
            >
              <a
                href={'google.com.ua'}
                target='_blank'
                style={{
                  color: 'yellow',
                }}
              >
                Порядок повідомлення ТОВ «ДІДЖИ ФІНАНС» про те, що інтереси споживача фінансових послуг при врегулюванні простроченої заборгованості представляє його уповноважений представник
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Image
              src={windowSize >= 900 ? sectionImgPc : sectionImageMob}
              alt=''
              style={{
                height: windowSize >= 900 ? '610px' : 'auto',
                width: windowSize >= 900 ? '' : '100%',
              }}
            />
            <Image
              src={miniLogo}
              alt=''
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                width: '100%',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}