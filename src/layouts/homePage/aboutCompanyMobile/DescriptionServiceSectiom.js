import styled from '@emotion/styled';
import { Box } from '@mui/material';

const CustH2 = styled.h2`
    color: white;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -10px;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: yellow;
    }
`
const CustSpan = styled.span`
    display: block;
    color: white;
    margin-top: 50px;
    & + & {
      margin-top: 50px;
    }
`

export const DescriptionServiceSectiom = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0C1A36',
        width: {xs: '100%', lg:'59%'},
        padding: {xs: '60px 20px', md:'80px'},
      }}
    >
      <CustH2>ПРО КОМПАНІЮ</CustH2>
      <CustSpan>
        ТОВ &quot;ДІДЖИ ФІНАНС&quot; заснована в 2018 р. провідними експертами ринку управління проблемних активів.
        Компанія успішно розвиває бізнес та сприяє активному зменшенню розміру непрацюючих кредитних портфелів
        як державних та комерційних банків, так і мікро фінансових організацій.
      </CustSpan>
      <CustSpan>
        ТОВ &quot;ДІДЖИ ФІНАНС&quot; – одна з ключових компаній на ринку, що здійснює систематичні купівлі та обслуговування
        портфелів NPL, що мають забезпечення (іпотеки, застави, транспортні засоби, спец обладнання, тощо), а також
        кредити/позики без додаткових забезпечень.
      </CustSpan>
    </Box>
  )
}