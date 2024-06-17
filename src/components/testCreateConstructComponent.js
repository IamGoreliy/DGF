import { Box, Container } from '@mui/material';

const TestCreateConstructComponent = ({children}) => {
  return (
    <>
      <Box>
        <Container
          id={'testConteiner'}
          maxWidth={'custXl'}
          sx={{
            position: 'relative',
            minHeight: '300px'
          }}
        >
          {children}
        </Container>
      </Box>
    </>
  )
}

export default TestCreateConstructComponent;