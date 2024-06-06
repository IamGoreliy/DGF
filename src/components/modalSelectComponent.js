import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';



const ModalSelectComponent = () => {
  const [openComponent, setOpenComponent] = useState(false);0
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'orange',
          width: '100%',
          height: '100vh',
        }}
      >
        <Typography>
          Компоненты
        </Typography>
        <Box
          onClick={() => setOpenComponent(!openComponent)}
          sx={{
            border: '1px solid black'
          }}
        >
          <Typography>
            выбрать компонет конопки
          </Typography>
          <Box
            sx={{
              width: 'auto',
              height: openComponent ? '150px' : '0px',
              overflow: 'hidden',
              transition: '500ms height linear'
            }}
          >
          <Button
            variant={'outlined'}
          >
            выбрать кнопку
          </Button>
          <Button
            variant={'text'}
          >
            выбрать кнопку
          </Button>
          <Button
            variant={'contained'}
          >
            выбрать кнопку
          </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ModalSelectComponent