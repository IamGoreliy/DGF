import { Box, Button, Typography } from '@mui/material';
import { cloneElement, createElement, useEffect, useState } from 'react';
import { dataElemets } from './dataConstructComponent/data';
import TestCreateConstructComponent from './testCreateConstructComponent';
import { Fragment } from 'react';
import { RenderDataSelectComponentButton } from './dataSelectComponent/selectButton/RenderDataSelectComponentButton';
import dataSelectComponent from './dataSelectComponent/dataSelectComponent';
import { SelectButton } from './dataSelectComponent/selectButton/SelectButton';
import { SelectCard } from './dataSelectComponent/selectCard/SelectCard';

export const fnComponentConstruct = (data) => {
  const setImports = new Set(data.map(item => item.importComponent));
  const imports = Array.from(setImports).join('\n');
  const elements = data.map(ele => ele.htmlElement);


  const Component =
    <TestCreateConstructComponent>
      <h1
        style={{ textAlign: 'center', color: 'red' }}
      >
        hello
      </h1>
      {elements && elements.map((element, index) => (
        <Fragment key={index}>
          {element}
        </Fragment>
      ))}
    </TestCreateConstructComponent>
  return Component;
}

const ModalSelectComponent = ({ getComponent }) => {
  // const [openComponent, setOpenComponent] = useState(false);
  const [arrElement, setArrElement] = useState([]);

  useEffect(() => {
    if (arrElement) {
      const componentJSX = fnComponentConstruct(arrElement);
      getComponent(componentJSX);
    }
  }, [arrElement]);

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
        <SelectButton
          getComponent={getComponent}
          stateElement={{
            arrElement,
            setArrElement,
          }}
        />
        <SelectCard
          getComponent={getComponent}
          stateElement={{
            arrElement,
            setArrElement,
          }}
        />
      </Box>
    </>
  )
}

export default ModalSelectComponent


