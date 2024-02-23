import { Box, Container, Typography } from '@mui/material';
import { CustH2, CustLi } from '../../styledComponent/StyledComponent';
import { useContext, useState } from 'react';
import {WindowSeizeContext} from '../headerNavigation';
import { colorSite } from '../../styledComponent/colorSite';
import { fonts } from '../../styledComponent/fonts';
import {FAQData} from './sectionFAQData/FAQData';
import {ArrowTop} from '../../image/svgComponents';

const openQuestion = (questId, stateFAQ, setFAQ) => {
  if (questId !== stateFAQ) {
    setFAQ(questId);
  } else {
    setFAQ(null);
  }
}

export const SectionFAQ = () => {
  const [whatFAQOpen, setWhatFAQOpen] = useState('null');
  const windowSize = useContext(WindowSeizeContext);
  const isMobile = windowSize <= 900;
  return (
    <Box>
      <Container
        maxWidth={'custXl'}
        sx={{
          paddingTop: {xs: '80px', md: '80px'},
          paddingBottom: {xs: '120px', md: '180px'},
        }}
      >
        <CustH2
          color={colorSite.colorTextBlack}
          bgcB={colorSite.underliningBeforeYellow}
          topB={'-20px'}
          style={{
            margin: '0px',
            ...fonts.sectionAboutCompany.titleControl,
          }}
        >
          розкриття інформації
        </CustH2>
        <Box>
          <ul
            style={{
              listStyle: 'none',
              padding: '0px',
              marginTop: 'clamp(30px,3.75vw,60px)',
            }}
          >
            {FAQData.map(question => {
              return (
                <CustLi
                  key={question.id}
                  mtEplusE={'20px'}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: {xs: 'auto', md: '70px'},
                        border: '1px solid #D9D9D9',
                        borderTop: '3px solid #D9D9D9',
                        borderLeft: '3px solid #D9D9D9',
                        borderRight: '3px solid #D9D9D9',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '30px',
                        cursor: 'pointer',
                        padding: '20px 20px 18px;'
                      }}
                      onClick={() => openQuestion(question.id, whatFAQOpen, setWhatFAQOpen)}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          borderRight: {md: '1px solid #D9D9D9'},
                          height: '100%',
                          width: '50px',
                          justifyContent: 'center',
                        }}
                      >
                        <ArrowTop
                          style={{
                            rotate: question.id === whatFAQOpen ? '0deg' : '180deg',
                          }}
                        />
                      </Box>
                      <Typography
                        variant={'h3'}
                        sx={{
                          fontFamily: 'Raleway,sans-serif',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          fontSize: 'clamp(18px,1.25vw,20px)',
                          lineHeight: '110%',
                          textTransform: 'uppercase',
                          color: '#373737',
                        }}
                      >
                        {question.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        bottom: '0px',
                        left: '0px',
                        border: '1px solid #D9D9D9',
                        overflow: 'hidden',
                        maxHeight: question.id === whatFAQOpen ? '960px' : '0px',
                        padding: question.id === whatFAQOpen &&'20px',
                        // padding: '20px',
                        paddingLeft: {xs: '20px', md: '85px'},
                        transition: '500ms padding linear, 500ms max-height linear',

                      }}
                    >
                      {question.desc}
                    </Box>
                  </Box>
                </CustLi>
              )
            })}
          </ul>
        </Box>
      </Container>
    </Box>
  )
}