import { Box, Button, Container, TextField } from '@mui/material';
import {ToggleModalMessage} from '../pages/dashboard';
import {recordMessageFromAdminPanel} from '../utils/custFetch';
import { useState } from 'react';
const debounce = require('lodash.debounce');

// const changeValueInput = debounce((eventValue, setChangeInput) => {
//   setChangeInput(eventValue);
// }, 300)

export const CreateOfferMessage = ({fnToggleModal, fnSetOfferId, data}) => {
  const [modalMessage, setModalMessage] = fnToggleModal;
  const [idOffer, setIdOffer] = fnSetOfferId;
  const [inputValue, setInputValue] = useState(data.message)
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            border: '1px solid rgb(194, 194, 194, 0.3)',
            backgroundColor: 'white',
            borderRadius: '20px',
            overflow: 'auto',
          }}
        >
          <Container>
            <Box>
              <button
                onClick={() => {
                  setIdOffer(0);
                  setModalMessage(!modalMessage)
                }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                }}
              >
                X
              </button>
              <h1>result of negotiations</h1>
            </Box>
            <Box
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const token = window.sessionStorage.getItem('token');
                formData.append('jwt', token);
                formData.append('idOffer', idOffer);
                const response = await recordMessageFromAdminPanel(formData);
                setIdOffer(0);
                setModalMessage(!modalMessage);
              }}
              component={'form'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '30px',
              }}
            >
              <TextField
                id="filled-textarea"
                label="message admin"
                placeholder="1000 characters allowed"
                multiline
                variant="filled"
                name={'message'}
                onChange={({target: { value }}) => setInputValue(value)}
                sx={{
                  width: '100%'
                }}
                value={inputValue}
              />
              <Button
                type={'submit'}
                variant={'outlined'}
              >
                send
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}