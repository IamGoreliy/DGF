import {Box} from '@mui/material';

export const AuxiliaryHeadersMenus = ({auxiliaryMenuButtons}) => {
  return (
    <Box>
      {auxiliaryMenuButtons.map(btn => {
        return (
          <Box
            key={btn}
          >
            {btn}
          </Box>
        )
      })}
    </Box>
  )
}