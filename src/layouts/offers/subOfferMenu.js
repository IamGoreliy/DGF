import {Box, Button} from '@mui/material';
import { PdfIcon } from '../../image/svgComponents';

export const SubOfferMenu = ({switcherModal}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        background: 'white',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'

      }}
    >
      <Button
        variant={'outlined'}
        onClick={() => switcherModal(true)}
      >
        Прийняти участь
      </Button>
      <Button
        variant={'outlined'}
      >
        Детальні умови
      </Button>
      <Button
        variant={'outlined'}
      >
        Хочу консультацію
      </Button>
    </Box>
  )
}