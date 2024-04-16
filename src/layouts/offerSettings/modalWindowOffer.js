import { Box, Button, Container } from '@mui/material';
import { CreateOffer } from './CreateOffer';
import {PreviewOffer} from './previewOffer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createContext} from 'react';

const IdOffer = createContext();

export const ModalCreateOffer = ({isOpenModal, setIsOpenModal, data, statusRender}) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-35%, -50%)',
            // width: '60%',
            // height: '60%',
            border: '1px solid #D9D9D9',
            borderRadius: '20px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            // alignItems: 'center',
            overflow: 'auto',
            padding: '60px 20px 20px'
          }}
        >
          <Button
            variant={'outlined'}
            onClick={() => setIsOpenModal({
              ...isOpenModal,
              isOpen: !isOpenModal.isOpen,
              whichModalIsOpen: isOpenModal.whichModalIsOpen === ''
                ? 'createOffer'
                : ''
            })}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
          >
            X
          </Button>
          {
            isOpenModal.whichModalIsOpen === 'createOffer'
            ? <CreateOffer statusRender={statusRender}/>
            : <IdOffer.Provider value={isOpenModal.idOffers}>
                <PreviewOffer data={data}/>
              </IdOffer.Provider>
          }
          <ToastContainer/>
        </Box>
      </Box>
    </>
  )
}