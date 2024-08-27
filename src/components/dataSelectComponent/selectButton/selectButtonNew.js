import { Box, Typography } from '@mui/material';
import { RenderDataSelectComponentButton } from './RenderDataSelectComponentButton';
import dataSelectComponent from '../dataSelectComponent';
import {useState } from 'react';
import {AddComponentPreviewBtn} from '../../SelectedComponent/AddComponentPreviewBtn';

export const SelectButtonNew = ({fnSelectComponent}) => {
  const [openComponent, setOpenComponent] = useState(false);

  return (
    <Box
      sx={{
        border: '1px solid black',
        mt: '40px',
        minWidth: '250px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography>
          выбрать компонет конопки
        </Typography>
        <button
          onClick={() => setOpenComponent(!openComponent)}
        >
          +
        </button>
      </Box>
      <Box
        onClick={(e) => {
          const selectedElement = e.target;
          console.log(selectedElement);
        }}
        sx={{
          width: 'auto',
          height: openComponent ? 'auto' : '0px',
          overflow: 'hidden',
          transition: '500ms height linear'
        }}
      >
        <AddComponentPreviewBtn
          dataComponent={dataSelectComponent.button.variant}
          fnSelectComponent={fnSelectComponent}
        />
        {/*<RenderDataSelectComponentButton data={dataSelectComponent.button.variant}/>*/}
      </Box>
    </Box>
  )
}