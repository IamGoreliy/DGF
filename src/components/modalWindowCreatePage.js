import { Box, Button, Container } from '@mui/material';
import {Layout as Header} from '../layouts/headerNavigation';
import {LayoutAuxiliaryPage} from '../layouts/LayoutAuxiliaryPage';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import ComponentConstructor from './СomponentСonstructor';

const ModalWindowCreatePage = ({closeModal}) => {
  const {openWindowCreatePage, setOpenWindowCreatePage} = closeModal;
  return (
    <>
      <Box
        width={'100%'}
        height={'100vh'}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'green',
          zIndex: -1
      }}
      >
        <Container
          maxWidth={'custXl'}
          sx={{
            position: 'relative',
            mt: '70px',
            height: '100%'
          }}
        >
          <Button
            onClick={() => setOpenWindowCreatePage(!openWindowCreatePage)}
            variant={'contained'}
            sx={{
              display: 'block',
              marginLeft: 'auto'
            }}
          >
            Close
          </Button>
          <Box
            sx={{
              mt: '5px',
              border: '1px solid black',
            }}
          >
            <Header>
              <LayoutAuxiliaryPage>
                <ComponentConstructor/>
              </LayoutAuxiliaryPage>
            </Header>
            <SectionFooter/>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ModalWindowCreatePage;