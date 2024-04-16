import Image from 'next/image';
import { Box } from '@mui/material';
import bgPc from '../../../../public/image/homePage/first-bg.webp'

export const FirstPcBg = () => {
  return (
    <Box sx={{
      display: {xs: 'none', md: 'flex'},
      flexDirection: 'row-reverse',
      position: 'absolute',
      top: '0px',
      right: '0px'

    }}>
      <Image
        src={bgPc}
        alt='pc bg'
      />
    </Box>
  )
}