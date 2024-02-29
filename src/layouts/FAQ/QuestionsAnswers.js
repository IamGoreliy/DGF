import {Box, Container, Typography} from '@mui/material';
import { QuestionsAnswersData } from './QuestionsAnswersData';
import {ArrowTop} from '../../image/svgComponents';
import { useReducer, useContext } from 'react';
import {WindowSeizeContext} from '../headerNavigation';

const initialStateFn = (questionAnswersData) => {
  return questionAnswersData.reduce((acc, ele) => {
    if (!acc.hasOwnProperty(ele.id)) {
      acc[ele.id] = false;
    }
    return acc
  }, {})
}

const reducer = (state, action) => {
  return {...state, ...state[action.id] = action.value}
}

export const QuestionsAnswers = () => {
  const windowSize = useContext(WindowSeizeContext);
  const isMobile = windowSize <= 900;
  const [state, dispatch] = useReducer( reducer, initialStateFn(QuestionsAnswersData));
  return (
    <Box
      sx={{
        padding: '30px 0 clamp(80px,11.25vw,180px)',
      }}
    >
      <Container
        maxWidth={'custXl'}
      >
        <Box>
          <Box
            component={'ul'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              listStyle: 'none',
              padding: '0px',
            }}
          >
            {QuestionsAnswersData.map(ele => {
              const {id, title, desc} = ele;
              return (
               <Box
                component={'li'}
                key={id}
                onClick={() => dispatch({id, value: !state[id]})}
                sx={{
                  width: {xs: '100%', md: '80%'},
                  cursor: 'pointer',
                  '& + &': {
                    marginTop: '20px',
                  },
                }}
               >
                 <Box
                  sx={{
                    display: 'flex',
                    borderTop: '2px solid #D9D9D9',
                    borderRight: '2px solid #D9D9D9',
                    borderLeft: '2px solid #D9D9D9',
                    alignItems: 'center',
                    gap: '30px',
                    padding: '20px 20px'

                  }}
                 >
                   <ArrowTop
                    sx={{
                      rotate: state[id] ? '180deg' : '0deg',
                      fill: '#0079C5',
                    }}
                   />
                   <Typography
                    variant={'h4'}
                    sx={{
                      fontFamily: 'Raleway,sans-serif',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: 'clamp(18px,1.25vw,20px)',
                      lineHeight: '110%',
                      textTransform: 'uppercase',
                    }}
                   >
                     {title}
                   </Typography>
                 </Box>
                 <Box
                  sx={{
                    border: '1px solid #D9D9D9',
                    padding: state[id] && '20px',
                    maxHeight: state[id] ? '340px' : '0px',
                    overflow: 'hidden',
                    paddingLeft: {xs: '20px', md: '85px'},
                    transition: '500ms padding linear, 500ms max-height linear',

                  }}
                 >
                   {desc}
                 </Box>
               </Box>
              )
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}