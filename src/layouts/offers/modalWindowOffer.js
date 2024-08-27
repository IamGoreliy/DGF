import {Box, Typography, Button, TextField, MenuItem, Checkbox} from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import {Data} from '../../pages/Offers';
import { clickForSubmitForm, sendForm } from '../../utils/sendForm';
import { toast } from 'react-toastify';

const clearForm = (switcherModal) => {
  const form = window.document.getElementById('formOffer');
  switcherModal(false);
  form.reset();
}


export const ModalWindowOffer = ({switcherModal, idOffer}) => {
  const [agree, setAgree] = useState(false);
  const [resSendForm, setResSendForm] = useState({});
  const offersData = useContext(Data);


  useEffect(() => {
    if (resSendForm.message) {
      if (resSendForm.message === 'заявка успешно отправлена') {
        toast.success(resSendForm.message);
        clearForm(switcherModal);
      } else {
        toast.error('заявка не создана повторите операцию позже');
      }
    }
  }, [resSendForm]);

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
        zIndex: '2',
        overflow: 'scroll'
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
              flexDirection: {xs: 'column-reverse', md: 'row'},
              gap: '20px',
              padding: '40px',
            }}
        >
          <Box
            sx={{
              position: 'relative',
              width: {xs: '100%', md: '50%'},
            }}
          >
            <Box
              sx={{
                marginTop: '20px',
                border: '1px solid #D9D9D9',
                padding: '20px'
              }}
            >
              <Typography>
                «Дане звернення адресоване кредитору з метою уточнення статусу моєї кредитної справи та можливості скористатися умовами акції.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: '20px',
                border: '1px solid #D9D9D9',
                padding: '20px'
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
              onClick={() => clickForSubmitForm()}
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
            id={'formOffer'}
            encType={'multipart/form-data'}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              const offerTitle = offersData.reduce((acc, ele) => {
                if (ele.id === idOffer) {
                  acc = ele.title;
                }
                return acc;
              } , '');
              formData.append('nameOffer', offerTitle);
              await sendForm(formData, setResSendForm);
            }}
            component={'form'}
            sx={{
              width: {xs: '100%', md: '50%'},
              display: 'flex',
              flexDirection: 'column',
              mt: '20px',
            }}
          >
            <TextField
              id="filled-basic"
              label="программа"
              variant="filled"
              select
              defaultValue={idOffer}
              helperText="Оберіть назву програми"
              required
              name={'idOffer'}
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
              required
              name={'userName'}
              sx={{
                marginTop: '15px'
              }}
            />
            <TextField
              id="filled-basic"
              label="Ваш номер телефону"
              variant="filled"
              type={"number"}
              required
              name={'userPhone'}
              sx={{
                marginTop: '15px'
              }}
            />
            <TextField
              id="filled-basic"
              label="Ваш e-mail"
              variant="filled"
              required
              name={'userMail'}
              sx={{
                marginTop: '15px'
              }}
            />
            <Button
              id={'btnSubForm'}
              type={"submit"}
              sx={{
                scale: 0,
              }}
            >

            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}