import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { Switch } from '../../image/svgComponents';
import Image from 'next/image';
import placeholderImg from '../../../public/image/placeholder/placeholder.webp';
import {AddPhotoIcon} from '../../image/svgComponents';
import {useState} from 'react';
import {uploadFile} from '../../utils/custFetch';
import { toast } from 'react-toastify';
const debounce = require('lodash.debounce')

function fieldImgClick () {
  window.document.getElementById('inputImg').click();
}

const textFieldChange = debounce((value, setStateFn) => {
  setStateFn(value);
}, 500);



export const CreateOffer = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [titleOffer, setTitleOffer] = useState('');
  const [descOffer, setDescOffer] = useState('');



  return (
    <Box
      sx={{
        marginTop: {xs: '30px', md:'70px'},
        padding: '30px 0 clamp(80px,11.25vw,180px)',
      }}
    >
      <Container
        maxWidth={'custXl'}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            gap: '30px',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '430px' },
              height: '480px',
              border: '1px solid #D9D9D9',
              borderRadius: '10px',
              padding: '20px 20px',
              overflow: 'auto',
              position: 'relative',
              '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
                borderRadius: '10px',
                backgroundColor: '#F5F5F5',

              },
              '&::-webkit-scrollbar': {
                width: '10px',
                backgroundColor: '#F5F5F5',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
                // background: 'rgb(0,196,237)',
                background: 'linear-gradient(180deg, rgba(0,196,237,1) 23%, rgba(255,239,0,1) 77%)',
              },
            }}
          >
            <Box
              // onClick={() => openSubMenu(id, whatOfferOpen, setWhatOfferOpen)}
              component={'button'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '50px',
                border: '1px solid #D9D9D9',
                position: 'absolute',
                zIndex: '3',
                top: '20px',
                right: '20px',
                borderRadius: '5px',
                // '& > svg': {
                //   fill: {xs: whatOfferOpen === id ? 'yellow' : 'black', md: whatOfferOpen === id ? 'yellow' : 'black'},
                // },
                backgroundColor: { xs: '#ffffff7a', md: '#ffffff7a' },
                // '&:hover':{
                //   backgroundColor: {xs: 'none', md: '#76ed7694'},
                // },
                // '&:hover > svg': {
                //   fill: {xs: '', md: 'yellow'},
                // }
              }}
            >
              <Switch
                sx={{
                  fill: 'black',
                  width: '25px',
                  height: '25px',
                  // stroke: 'yellow',
                  // strokeWidth: '1px',
                }}
              />
            </Box>
            <Box
              sx={{
                position: 'relative',
                '&:hover': {
                  border: '3px solid green'
                },
                '&:hover svg': {
                  opacity: 1
                },
              }}
            >
              <Image
                src={placeholderImg}
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: '20px',
                position: 'relative',
              }}
            >
              {/*{whatOfferOpen === id && <SubOfferMenu switcherModal={setIsOpenModalWindow}/>}*/}
              <Typography
                variant={'h3'}
                sx={{
                  fontFamily: 'Raleway',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: 'clamp(16px,1.25vw,20px)',
                  lineHeight: '110%',
                  textTransform: 'uppercase',
                }}
              >
                {titleOffer === '' ? 'Название акционной программы' : titleOffer}
              </Typography>
              <Box
                sx={{
                  marginTop: '20px',
                  fontFamily: 'Raleway',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: 'clamp(14px,1vw,16px)',
                  lineHeight: '1.4',
                  color: '#373737',
                }}
              >
                {descOffer === '' ? 'описание акионной прогрммы (условия)' : descOffer}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              onSubmit={async (e) => {
                e.preventDefault();
                const sendFormISReady = Boolean(imageUrl);
                const form = e.target;
                const formData = new FormData(form);
                formData.append('token', window.sessionStorage.getItem('token'));
                if (sendFormISReady) {
                  setImageUrl('');
                  form.reset();
                  const [responseStatus, data] = await uploadFile(formData);
                  console.log('status', responseStatus);
                  console.log('data', data);
                  if (responseStatus) {
                    toast.success(data.message);
                  } else {
                    toast.error(data.message);
                  }
                }
              }}
              encType={'multipart/form-data'}
              component={'form'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                borderRadius: '10px',
                width: '430px',
                gap: '20px',
                padding: '20px'
              }}
            >
              <TextField
                // id="filled-basic"
                onClick={() => {
                  const inputVideo = window.document.getElementById('videoUrl');
                  inputVideo.click();
                }}
                label="выбрать картинку"
                variant="filled"
                value={imageUrl}
                InputProps={{
                  readOnly: true,
                }}

              />
              <input
                id='videoUrl'
                onChange={({target: {value}}) => {
                  const nameImg = value.replace("C:\\fakepath\\", "");
                  setImageUrl(nameImg);
                }}
                type={"file"}
                name='img'
                // required
                hidden
              />
              <TextField
                // id="filled-basic"
                onChange={({currentTarget: {value}}) => setTitleOffer(value)}
                label="Название продукта"
                variant="filled"
                type='text'
                required
                name='title'
              />
              <TextField
                // id="filled-basic"
                onChange={({currentTarget: {value}}) => setDescOffer(value)}
                label="Описание продукта"
                variant="filled"
                type='text'
                required
                name='desc'
              />
              <Button
                variant={'outlined'}
                type='submit'
                disabled={!Boolean(imageUrl)}
              >
                отправить
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}