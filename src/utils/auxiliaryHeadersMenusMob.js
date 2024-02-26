import {Box, Typography} from '@mui/material';
import { useState } from 'react';
import { createPortal } from 'react-dom';


const openSubMenu = (event, state, changeState) => {
  const eleParent = event.currentTarget;
  const eleChild = event.target;
  if (eleChild !== eleParent) {
    changeState(false)
  }
}

export const AuxiliaryHeadersMenusMob = ({auxiliaryMenuButtons, pageBtn, handlePage}) => {
  const [isOpenSubMenuPage, setIsOpenSubMenuPage] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Typography
        onClick={() => setIsOpenSubMenuPage(!isOpenSubMenuPage)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          '&: hover': {
            color: 'yellow',
          }
        }}
      >
        {pageBtn}
      </Typography>
      {isOpenSubMenuPage && <Box
        sx={{
          width: '300px',
          position: 'absolute',
          top: '25px',
          left: '-20px',
          marginTop: '20px',
          border: '1px solid black',
          padding: '20px 20px',
          zIndex: '5',
          backgroundColor: 'black',
        }}
      >
        {auxiliaryMenuButtons.map(btn => {
          return (
            <Box
              key={btn}
              sx={{
                '& + &': {
                  marginTop: '20px',
                },
              }}
            >
             <Typography
              onClick={() => handlePage(btn)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                '&: hover': {
                  color: 'yellow',
                }
              }}
             >
               {btn}
             </Typography>
            </Box>
          )
        })}
      </Box>}
    </Box>
  )
}