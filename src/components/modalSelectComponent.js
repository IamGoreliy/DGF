import { Box, Button, Typography } from '@mui/material';
import { cloneElement, createElement, useEffect, useState } from 'react';
import { dataElemets } from './dataConstructComponent/data';
import TestCreateConstructComponent from './testCreateConstructComponent';
import { Fragment } from 'react';
import { RenderDataSelectComponentButton } from './dataSelectComponent/selectButton/RenderDataSelectComponentButton';
import dataSelectComponent from './dataSelectComponent/dataSelectComponent';
import { SelectButton } from './dataSelectComponent/selectButton/SelectButton';


const fnAddingElements = (element, initialState, setState) => {
  console.log(element.id)
  if (element.id !== 'elementConstruct') {
    return;
  }


  const className = element.className;
  const nodeName = element.nodeName;
  const textElement = element.textContent;

  const propertyReactElement = Object.keys(element).find(key => key.startsWith('__reactProps$'));
  const elementReactProps = element[propertyReactElement];
  const {children} = elementReactProps;

  const getStyle = window.getComputedStyle(element);
  console.log('red', getStyle.color, 'borderColor', getStyle.borderColor)
  const styleComponent = {
    color: getStyle.color,
    borderColor: getStyle.borderColor
  }


  const variantElement = dataElemets
    .find(ele => ele.nameElement
    === nodeName.toLowerCase())
    .variant.find(ele => className.includes(ele.variantName));
  const newElement = {
    htmlElement: cloneElement(variantElement.htmlElement, {
      children: textElement,
      style: {...styleComponent},
    })
  }

  if (newElement) {
    setState([...initialState, newElement]);
  }
}

export const fnComponentConstruct = (data, TestCom) => {
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
  // const [arrElement, setArrElement] = useState([]);
  //
  // useEffect(() => {
  //   if (arrElement) {
  //     const componentJSX = fnComponentConstruct(arrElement);
  //     getComponent(componentJSX);
  //   }
  // }, [arrElement]);

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
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    border: '1px solid black',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Box*/}
        {/*    sx={{*/}
        {/*      display: 'flex',*/}
        {/*      justifyContent: 'space-between'*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Typography>*/}
        {/*      выбрать компонет конопки*/}
        {/*    </Typography>*/}
        {/*    <button*/}
        {/*      onClick={() => setOpenComponent(!openComponent)}*/}
        {/*      style={{*/}
        {/*        width: '50px',*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      +*/}
        {/*    </button>*/}
        {/*  </Box>*/}
        {/*  <Box*/}
        {/*    onClick={(e) => {*/}
        {/*      const selectedElement = e.target;*/}
        {/*      fnAddingElements(selectedElement, arrElement, setArrElement);*/}
        {/*    }}*/}
        {/*    sx={{*/}
        {/*      width: 'auto',*/}
        {/*      height: openComponent ? 'auto' : '0px',*/}
        {/*      overflow: 'hidden',*/}
        {/*      transition: '500ms height linear'*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <RenderDataSelectComponentButton data={dataSelectComponent.button.variant}/>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
        <SelectButton getComponent={getComponent}/>
      </Box>
    </>
  )
}

export default ModalSelectComponent


