import {Box, Container, Grid, Typography} from '@mui/material';
import {consequencesData} from './consequencesData';
import Image from 'next/image';

export const FirstSection = () => {
  return (
    <Box
      sx={{
        padding: '80px 0 clamp(80px,11.25vw,180px)',
      }}
    >
      <Container
        maxWidth={'custXl'}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}

        >
          {consequencesData.map(ele => {
            const {id, title, urlImg, desc} = ele;
            return (
              <Box

                key={id}
                sx={{
                  flexGrow: 2,
                  flexBasis: 'calc((100% - 6 * 20px) / 3)',
                  border: '1px solid #D9D9D9',
                  '&:nth-child(1n + 4)': {
                    height: {xs: 'auto', md: '420px'}
                  },

                }}

              >
                <Box
                  sx={{
                    padding: '20px',
                    height: {xs: 'auto', md: '520px'},
                  }}
                >
                  <Image
                    src={urlImg}
                    alt=''
                    style={{
                      display: 'block',
                      width: '100%'
                    }}
                  />
                  <Typography
                    variant={'h3'}
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Raleway,sans-serif',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: 'clamp(16px,5vw,20px)',
                      lineHeight: '110%',
                      textTransform: 'uppercase',
                      padding: '20px'
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily:  'Raleway,sans-serif',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 'clamp(15px,1vw,16px)',
                      lineHeight: '156%',
                      color: '#373737',
                    }}
                  >
                    {desc}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}