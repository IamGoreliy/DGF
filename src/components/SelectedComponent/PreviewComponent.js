import { Box, Container } from '@mui/material';

export const PreviewComponent = ({component}) => {
  return (
    <Box
      sx={{
        mt: '30px'
      }}
    >
      <Container
        maxWidth={'xl'}
      >
        <Box
          sx={{
            border: '1px solid black',
            width: '100%',
            height: '100px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {component}
        </Box>
      </Container>
    </Box>
  )
}