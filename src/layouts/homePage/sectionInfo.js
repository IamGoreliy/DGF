import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import mobileBg from '../../../public/image/homePage/firstMobile.png';
import pcBg from '../../../public/image/homePage/first-bg.webp';
import { FirstMobileBg } from "./firstBgHomePage/firstMobileBg";
import {FirstPcBg} from './firstBgHomePage/firstPcBg';
import { yellow } from '@mui/material/colors';

const CustomH1 = styled.h1`
    font-famely: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-style: normal;
    font-weight: 600;
    font-size: clamp(30px,2.813vw,45px);
    line-height: 120%;
`

const NameCompanySpan = styled.span`
    display: block;
    color: #E7E04D;
    font-weight: 800;
    font-size: clamp(14px,1.25vw,20px);
    line-height: 105%;
    margin-bottom: 20px;
`
const DescriptionName = styled.span`
    display: block;
    color: white;
`

const CustomFirstSection = styled.div`
    position: relative;
    background: rgb(12,26,54);
    background: linear-gradient(90deg, rgba(12,26,54,1) 0%, rgba(12,26,54,0.6250875350140056) 100%);
    
`
const CustomDesc = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(15px,1vw,16px);
  line-height: 156%;
  color: white;
  &:before {
    content: '';
    display: block;
    margin-right: 30px;
    width: 2px;
    height: auto;
    background-color: yellow;
  }
  
`

const TestButton = styled.button`
    color: white;
    border: 1px solid yellow;
    background-color: transparent;
    border-radius: 5px;
    &:first-of-type {
      background-color: yellow;
      color: black;
    }
    &:hover {
        background-color: yellow;   
        color: black; 
    }
`

const ButtomSelect = styled(props => {
  const {...other} = props;
  return <TestButton {...other}/>
})(({width, height}) => {
  return {
    width: width,
    height: height,
  }
})

const btnName = ['Залишити заявку', 'Сплатити борг'];
export const SectionInfo = () => {
    return (
        <CustomFirstSection>
        <FirstMobileBg/>
        <FirstPcBg/>
        <Container 
            maxWidth={"custXl"}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                marginTop: { xs: '0px', md: '0px'},
                // background: {xs: 'rgb(0,0,0)', md: 'black'},
                background: {xs:'linear-gradient(180deg, rgba(0,7,9,0) 23%, rgba(1,1,0,1) 50%)', md: 'none'},
                height: {xs: 'auto', md: '810px'}

            }}
        >
            <Box
              sx={{
                marginTop: {xs: '300px', md: '40px'},
                paddingLeft: {xs: '15px', md: '100px'},
                width: {xs: '400px', md: '600px'},
                height: 'auto',
                position: 'relative'
            }}
            >
                <CustomH1>
                    <NameCompanySpan>DG Finance це</NameCompanySpan>
                    <DescriptionName>Багаторічний досвід та висококваліфікована команда</DescriptionName>
                </CustomH1>
                <CustomDesc
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: 'clamp(15px,1vw,16px)',
                        lineHeight: '156%',
                        color: 'yellow',
                    }}
                >
                ТОВ "ДІДЖИ ФІНАНС" заснована в 2018р. провідними експертами ринку управління проблемних активів. 
                Компанія успішно розвиває бізнес та сприяє активному зменшенню розміру непрацюючих кредитних портфелів як державних та комерційних банків, 
                так і мікро фінансових організацій.
                ТОВ "ДІДЖИ ФІНАНС" – одна з ключових компаній на ринку, що здійснює систематичні купівлі та обслуговування портфелів NPL, що мають забезпечення (іпотеки, застави, транспортні засоби, спец обладнання, тощо), а також кредити без забезпечень
                </CustomDesc>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    mt: '30px',
                    justifyContent: 'space-evenly',
                    height: {xs: '150px', md: 'auto'}

                }}
                >
                  {btnName.map(ele => {
                    const sizeWindow = window.innerWidth
                    const widthBtn = sizeWindow >= 900 ? '200px' : '100%'
                    return (
                      <ButtomSelect
                        key={ele}
                        width={widthBtn}
                        height={sizeWindow >= 900 ? '40px' : '65px'}
                      >
                        {ele}
                      </ButtomSelect>
                    )
                  })}
                </Box>
            </Box>

        </Container>
        </CustomFirstSection>
    )
}