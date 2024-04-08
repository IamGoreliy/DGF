import {Box, Container} from '@mui/material';

import {useContext} from 'react';
// import testImg from '../../../../material-kit-react'

export const PreviewOffer = ({data}) => {
  console.log(data)
  const {url_img: urlImg} = data;
  return (
    <>
      <Box>
        <Container
          maxWidth={'custXl'}
        >
          <Box
            component={'h2'}
          >
            <Box>
              <img
                src={urlImg}
                alt=''
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

