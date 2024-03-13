import { Box, Container, Typography, TextField, Button } from '@mui/material';
// import { offersData } from '../offers/offersData';
import { Switch } from '../../image/svgComponents';
import Image from 'next/image';
import placeholderImg from '../../../public/image/placeholder/placeholder.webp';
import {AddPhotoIcon} from '../../image/svgComponents';
import {useState} from 'react';
const debounce = require('lodash.debounce')

// import { SubOfferMenu } from '../offers/subOfferMenu';

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
              onChange={({currentTarget: {value}}) => setImageUrl(value)}
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
          <Box
            component={'form'}
            onClick={(e) => {
              e.preventDefault();
              const whatBtmPress = e.target.outerText;
              console.log(whatBtmPress)
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              width: '430px',
              height: '350px',
              border: '1px solid black',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <TextField
              id="filled-basic"
              onClick={fieldImgClick}
              label="выбрать картинку"
              variant="filled"
              fullWidth
              value={imageUrl}
              sx={{
                '& input': {
                  cursor: 'pointer',
                },

              }}
            />
            <TextField
              id="filled-basic"
              onChange={({currentTarget: {value}}) => textFieldChange(value, setTitleOffer)}
              label="Название акционного продукта"
              variant="filled"
              type='text'
              fullWidth
              sx={{
                '& input': {
                  cursor: 'pointer',
                },
              }}
            />
            <TextField
              id="filled-basic"
              onChange={({currentTarget : {value}}) => textFieldChange(value, setDescOffer)}
              label="Описание акционного продукта"
              variant="filled"
              type='text'
              fullWidth
              sx={{
                '& input': {
                  cursor: 'pointer',
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly'
              }}
            >
              <Button
                variant={'contained'}
              >
                сохранить
              </Button>
              <Button
                variant={'contained'}
              >
                очистить
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}