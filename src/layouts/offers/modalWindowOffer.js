import {Box, Typography, Button, TextField, MenuItem, Checkbox} from '@mui/material';
import {offersData} from './offersData';
import { useState } from 'react';

export const ModalWindowOffer = ({switcherModal, idOffer}) => {
  const [agree, setAgree] = useState(false);
  return (
    <Box
      onClick={(e) => {
        const parentElement = e.currentTarget;
        const childrenElement = e.target;
        if (parentElement === childrenElement) {
          switcherModal(false);
        }
      }}
      sx={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100%',
        height: '100vh',
        top: '0px',
        left: '0px',
        zIndex: '2'
      }}

    >
      <Box
        sx={{
          width: {xs: '100%', md: '820pt'},
          height: {xs: '80%', md: '350pt'},
          border: '1px solid #D9D9D9',
          borderRadius: '10px',
          backgroundColor: 'white',
          position: 'relative',
          overflow: {xs: 'auto',},

        }}
      >
        <Box
          sx={{
            width: '100%',
            borderBottom: '1px solid #D9D9D9',
            padding: '20px 20px 20px 20px',
            display: 'flex',
            justifyContent: 'space-between',
        }}
        >
          <Typography
            variant={'h4'}
          >
            ФОРМА РЕЄСТРАЦІЇ У АКЦІЇ»
          </Typography>
          <Button
            variant={'outlined'}
            onClick={() => switcherModal(false)}
            sx={{

              width: '50pt',
              height: '30pt',

            }}
          >
            X
          </Button>
        </Box>
        <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', md: 'column'},
              gap: '20px',
              padding: '40px',
            }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '50%',
            }}
          >
            <Typography>
              «Дане звернення адресоване кредитору з метою уточнення статусу моєї кредитної справи та можливості скористатися умовами акції.
            </Typography>
            <Box
              sx={{
                marginTop: '20px',
                border: '1px solid #D9D9D9',
              }}
            >
              <Typography>
                Я підтверджую актуальність наданих мною контактного номера телефону та електронної скриньки, також надаю згоду на їх обробку.»
              </Typography>
              <Checkbox
                value={agree}
                onChange={() => setAgree(!agree)}
              />
            </Box>
            <Button
              disabled={!agree}
              variant={'contained'}
              sx={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Надіслати
            </Button>
          </Box>
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              id="filled-basic"
              label="программа"
              variant="filled"
              select
              defaultValue={idOffer}
              helperText="Оберіть назву програми"
            >
              {offersData.map(offer => {
                const {id, title} = offer;
                return (
                  <MenuItem
                    key={id}
                    value={id}
                  >
                    {title}
                  </MenuItem>
                )
              })}
            </TextField>
            <TextField
              id="filled-basic"
              label="Ваше прізвище, ім’я та по батькові"
              variant="filled"
              sx={{
                marginTop: '15px'
              }}
            />
            <TextField
              id="filled-basic"
              label="Ваш номер телефону"
              variant="filled"
              type={"number"}
              sx={{
                marginTop: '15px'
              }}
            />
            <TextField
              id="filled-basic"
              label="Ваш e-mail"
              variant="filled"
              sx={{
                marginTop: '15px'
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}