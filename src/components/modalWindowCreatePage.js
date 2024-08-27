import { Box, Button, Container } from '@mui/material';
import {Layout as Header} from '../layouts/headerNavigation';
import {LayoutAuxiliaryPage} from '../layouts/LayoutAuxiliaryPage';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import TestCreateConstructComponent from './testCreateConstructComponent';
import { useState, createContext } from 'react';
import styled from '@emotion/styled';
import SelectedComponent from './SelectedComponent/SelectedComponent';

export const CustomButton = styled(props => {
  const {toggle, position, top, left, right, transform, ...other} = props;
  return <button {...other}/>
})(({toggle, position, top, left, right, transform}) => {
  return {
    position: position,
    top: top,
    left: left,
    right: right,
    transform: transform,
    overflow: !toggle ? 'auto' :'hidden',
    scale: !toggle ? 1 : 0,
    transition: 'overflow 500ms linear, scale 500ms linear',
  }
});


export const OptionWindowCreatePage = createContext({});

const ModalWindowCreatePage = ({closeModal, testComponent}) => {
  const {openWindowCreatePage, setOpenWindowCreatePage, } = closeModal;
  const [openSelectComponent, setOpenSelectComponent] = useState(false);
  const [isOpenAdditionalComponentOptions, setIsOpenAdditionalComponentOptions] = useState('');
  return (
    <Box
      width={'100%'}
      height={'100%'}
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'fixed',
        top: 0,
        right: 0,
        backgroundColor: 'green',
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          width: '100%'
        }}
      >
        <Container
          maxWidth={'custXl'}
          sx={{
            position: 'relative',
            mt: '70px',
            height: '100%',
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
      <CustomButton
        onClick={() => setOpenSelectComponent(!openSelectComponent)}
        toggle={openSelectComponent}
        position={'absolute'}
        top={'50%'}
        left={0}
        right={'unset'}
        transform={'translateY(-50%)'}
      >
        open
      </CustomButton>
      <OptionWindowCreatePage.Provider value={{openSelectComponent, setOpenSelectComponent, isOpenAdditionalComponentOptions, setIsOpenAdditionalComponentOptions}}>
        <SelectedComponent/>
      </OptionWindowCreatePage.Provider>
    </Box>
  )
}

export default ModalWindowCreatePage;