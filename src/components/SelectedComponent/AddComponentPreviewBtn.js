import {Box, Button} from '@mui/material';
import { useContext } from 'react';
import { OptionWindowCreatePage } from '../modalWindowCreatePage';

const toggleAdditionalComponentOptions = (stateAdditionalComponent, setStateAdditionalComponent, idComponent) => {
  if (stateAdditionalComponent === '') {
    setStateAdditionalComponent(idComponent);
  }
  if (stateAdditionalComponent === idComponent) {
    setStateAdditionalComponent('');
  } else {
    setStateAdditionalComponent(idComponent);
  }
}

export const AddComponentPreviewBtn = ({dataComponent, fnSelectComponent}) => {
  const {isOpenAdditionalComponentOptions, setIsOpenAdditionalComponentOptions} = useContext(OptionWindowCreatePage);
  return (
    <>
      {dataComponent && dataComponent.map(ele => {
        const ElementButton = <Button
          variant={ele}
        >
          sample button
        </Button>
        return (
          <Box
            key={ele}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px'
            }}
          >
            {ElementButton}
            <button
              onClick={() => {
                toggleAdditionalComponentOptions(isOpenAdditionalComponentOptions, setIsOpenAdditionalComponentOptions, ele);
                fnSelectComponent(ElementButton)
              }}
            >
              open
            </button>
          </Box>
        )
      })}
    </>
  )
}