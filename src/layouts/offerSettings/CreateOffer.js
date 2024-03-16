import { Box, Container, Typography, TextField, Button } from '@mui/material';
// import { offersData } from '../offers/offersData';
import { Switch } from '../../image/svgComponents';
import Image from 'next/image';
import placeholderImg from '../../../public/image/placeholder/placeholder.webp';
import {AddPhotoIcon} from '../../image/svgComponents';
import {useState} from 'react';
import {uploadFile} from '../../utils/custFetch';
const debounce = require('lodash.debounce')

// import { SubOfferMenu } from '../offers/subOfferMenu';

function fieldImgClick () {
  window.document.getElementById('inputImg').click();
}

const textFieldChange = debounce((value, setStateFn) => {
  setStateFn(value);
}, 500);


// async function operationWithForm (event) {
//   event.preventDefault();
//   // const whatBtmPress = event.target.outerText;
//   const form = event.target;
//   // switch (whatBtmPress) {
//   //   case 'очистить':
//   //     // inputForm[0].value = '';
//   //     form[1].value = '';
//   //     form[2].value = '';
//   //     setStateImageUrl('');
//   //     setStateTitle('');
//   //     setDescOffer('');
//   //     break;
//   //   case 'сохранить':
//   //     const formData = new FormData(form);
//   //     const testFormData = await uploadFile(formData);
//   //     console.log(testFormData)
//   //     break;
//   //   default:
//   //     console.log('hello');
//   // }
//   const formData = new FormData(form);
//   const testFormData = await uploadFile(formData);
//
//
// }



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
              <label htmlFor="inputImg">
                <Image
                  src={placeholderImg}
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto'
                  }}
                />
                <AddPhotoIcon
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '50px',
                    opacity: 0
                  }}
                />
              </label>
            </Box>
            <input
              onChange={({target: {files}}) => setImageUrl(files)}
              id='inputImg'
              type='file'
              name='offerImage'
              accept='.jpg, .jpeg, .png, .webp'
              hidden={true}
            />
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
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const response = await uploadFile(formData);

              }}
            >
              <label>
                <input
                  type='file'
                  name='img'
                />
                <input
                  type='text'
                  name='file_name'
                />
              </label>
              <button>
                отправить
              </button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}