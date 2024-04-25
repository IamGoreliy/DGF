import {Box, Container, Typography} from '@mui/material';

export const PreviewOffer = ({data}) => {
  const {url_img: urlImg, title, description} = data;
  return (
    <>
      <Box>
        <Container
          maxWidth={'custXl'}
          sx={{
            border: '1px solid #D9D9D9',
            width: {xs: '100%', md: '430px'},
            height: '480px',
            borderRadius: '10px',
            padding: '20px 20px',
            overflow: 'auto',
          }}
        >
          <Box>
            <img
              src={urlImg}
              alt=''
              width='100%'
              height={'100%'}
            />
          </Box>
          <Typography
            variant={'h3'}
          >
            {title}
          </Typography>
          <Typography
            variant={'text'}
          >
            {description}
          </Typography>
        </Container>
      </Box>
    </>
  )
}

