import { Box, Button, Typography } from '@mui/material';
import {CustomButton} from '../modalWindowCreatePage';
import { cloneElement, useCallback, useContext, useState } from 'react';
import {OptionWindowCreatePage} from '../modalWindowCreatePage';
import { SelectButtonNew } from '../dataSelectComponent/selectButton/selectButtonNew';
import {PreviewComponent} from './PreviewComponent';
import ComponentDesign from './ComponentDesign';

const fnRenderAdditionalComponentOptions = (stateModalSelectComponent, stateModalAdditionalComponentOptions) => {
  if (stateModalSelectComponent) {
    if (stateModalAdditionalComponentOptions) {
      return '600px';
    } else {
      return '0px';
    }
  } else {
    return '0px';
  }
}

const switchComponentSelected = (stateModalSelectComponent, fnChangeStateModalSelectComponent, fnChangeStateModalAdditionalComponentOptions) => {
  fnChangeStateModalSelectComponent(!stateModalSelectComponent);
  if (stateModalSelectComponent) {
    fnChangeStateModalAdditionalComponentOptions('');
  }
};

const switchBehaviorAdditionalComponentOptions = (stateModalAdditionalComponentOptions) => {
  if (stateModalAdditionalComponentOptions) {
    return 'width 500ms linear 3000ms';
  } else {
    return 'width 500ms linear';
  }
}

const initialStateComponent = <Button></Button>

const SelectedComponent = () => {
  const {openSelectComponent, setOpenSelectComponent, isOpenAdditionalComponentOptions, setIsOpenAdditionalComponentOptions} = useContext(OptionWindowCreatePage);
  const [componentPreview, setComponentPreview] = useState(initialStateComponent);

  const editComponent = useCallback((props) => {
    const Component = componentPreview;
    return <Component {...props}/>
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        width: openSelectComponent ? '300px' : 0,
        height: '100%',
        border: '1px solid black',
        transition: 'width 500ms linear 500ms',
        overflow: openSelectComponent ? 'auto' : 'hidden',
      }}
    >
      <CustomButton
        onClick={() => switchComponentSelected(openSelectComponent, setOpenSelectComponent, setIsOpenAdditionalComponentOptions)}
        toggle={!openSelectComponent}
        position={'absolute'}
        top={0}
        left={'unset'}
        right={0}
        transform={'translate(0px 0px)'}
      >
        close
      </CustomButton>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <SelectButtonNew fnSelectComponent={setComponentPreview}/>
      </Box>
      <Box
        sx={{
          width: fnRenderAdditionalComponentOptions(openSelectComponent, isOpenAdditionalComponentOptions),
          height: '100%',
          position: 'fixed',
          top: 0,
          left: openSelectComponent ? '260px' : '0px',
          border: isOpenAdditionalComponentOptions ? '1px solid black' : 'unset',
          backgroundColor: 'orange',
          transition: 'width 500ms linear, left 0ms linear 500ms',
          overflow: 'hidden',
        }}
      >
        <PreviewComponent component={componentPreview}/>
        <ComponentDesign/>
      </Box>
    </Box>
  )
}

export default SelectedComponent;