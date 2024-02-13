import {useState} from 'react';
import { Box, Container } from '@mui/material';
import styled from '@emotion/styled';
import { ArrowTop } from '../../image/logo/svgComponents';
import {tableСontents} from './sectionService/dataForSectionService';
import {CustH2} from '../../styledComponent/StyledComponent';

const styleBorderOn = '1px solid black';
const styleBorderOff = '0px solid black';


const CustButtonDescMob = styled.div`
    & + & {
      margin-top: 20px;
    }
`
const CustButtonDescPc = styled.div`
   
`

const BtnDesc = styled(props => {
  const {windowSize, ...other} = props;
  if(windowSize >= 900) {
    return <CustButtonDescPc {...other}/>
  }
  return <CustButtonDescMob {...other}/>
})(() => {
  return {

  }
})


const WrapperSvg = styled(props => {
  const {windowsSize, ...other} = props;
  return <div {...other}/>
})(({windowsSize}) => {
  return {
    display: windowsSize >= 900 ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '55px',
    height: '100%',
    borderRight: '1px solid black',
    marginRight: '30px'
  }
})

const CustTitle = styled(props => {
  const {windowSize, ...other} = props;
  return <h3 {...other}/>
})(({windowSize}) => {
  return {
    textAlign: windowSize >= 900 ? 'center' : 'none'
  }
})

const Description = styled(props => {
  const {openBlock, width, height, ...other} = props;
  return <div {...other}/>
})(({openBlock, width, height}) => {

  return {
    display: openBlock ? 'block' : 'none',
    width: {width},
    height: {height},
    borderTop: '0px solid black',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderRadius: '5px 5px 5px 5px',
    padding: '20px'
  }
})


const openDesc = (openBtnValue, openBtn, id) => {
  openBtnValue === id ? openBtn(0) : openBtn(id);
}


export const ServiceSection = () => {
  const [isOpenDesc, setIsOpenDesc] = useState(0);
  const windowsSize = window.innerWidth;
  return (
    <Container
      maxWidth={'custXl'}
      sx={{
        padding: 'clamp(80px,7.5vw,120px) 0 clamp(80px,11.25vw,180px)'
      }}
    >
      <CustH2
        color={'black'}
        widthB={'3rem'}
        heightB={'3px'}
        topB={'0px'}
        leftB={'0px'}
        bgcB={'yellow'}
      >
        Послуги
      </CustH2>
      <Box
        sx={{
          display: {xs: 'block', md: 'grid'},
          width: '100%',
          justifyContent: {xs: 'none', md: 'center'},
          alignItems: {xs: 'none', md: 'start'},
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: '20px',
          padding: {xs: '20px', md: '0px'}

        }}
        gridColumn='span 3'
      >
        {tableСontents.map(ele => {
          return (
            <BtnDesc
              key={ele?.id}
              windowSize={windowsSize}
              onClick={() => openDesc(isOpenDesc, setIsOpenDesc, ele.id)}
            >
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid black',
                  alignItems: 'center',
                  borderRadius: '10px',
                  padding: '0px 10px',
                  height: '80px',
                  justifyContent: {xs: 'none', md: 'center'},
                }}
              >
                <WrapperSvg
                  windowsSize={windowsSize}
                >
                  <ArrowTop
                    style={{
                      fill: 'black',
                      rotate: ele.id === isOpenDesc ? '180deg' : '0deg'
                    }}
                  />
                </WrapperSvg>
                <CustTitle
                  windowSize={windowsSize}
                >
                  {ele?.title}
                </CustTitle>
              </Box>
              <Box
                sx={{
                  display: {xs: ele.id === isOpenDesc ? 'block' : 'block', md: ''},
                  overflow: 'hidden',
                  width: {xs: ele.id === isOpenDesc ? '100%' : '100%', md: '100%'},
                  height: {xs: ele.id === isOpenDesc ? 'auto' : '0px', md: 'auto'},
                  borderTop: {xs: styleBorderOff, md: styleBorderOn},
                  borderRight: {xs: ele.id === isOpenDesc ? styleBorderOn : styleBorderOn, md: styleBorderOn},
                  borderBottom: {xs: ele.id === isOpenDesc ? styleBorderOn : styleBorderOn, md: styleBorderOn},
                  borderLeft: {xs: ele.id === isOpenDesc ? styleBorderOn : styleBorderOn, md: styleBorderOn},
                  borderRadius: '5px 5px 5px 5px',
                  padding: {xs: ele.id === isOpenDesc ? '20px' : '0px', md: '20px'},
                  transition: '1000ms height linear'

                }}
              >
                {ele?.desc}
              </Box>
            </BtnDesc>
          )
        })}
      </Box>
    </Container>
  )
}