import { Box, Button, Container } from '@mui/material';
import {Layout as Header} from '../layouts/headerNavigation';
import {LayoutAuxiliaryPage} from '../layouts/LayoutAuxiliaryPage';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import TestCreateConstructComponent from './testCreateConstructComponent';


const ModalWindowCreatePage = ({closeModal, testComponent}) => {
  const {openWindowCreatePage, setOpenWindowCreatePage, } = closeModal;
  return (
    <>
      <Box
        width={'90%'}
        height={'100vh'}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'green',
          zIndex: 3
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
                {testComponent}
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