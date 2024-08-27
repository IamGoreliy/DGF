import { Box, Typography } from '@mui/material';
import { RenderDataSelectComponentButton } from './RenderDataSelectComponentButton';
import dataSelectComponent from '../dataSelectComponent';
import { dataElemets } from '../../dataConstructComponent/data';
import { cloneElement, Fragment, useEffect, useState } from 'react';
import TestCreateConstructComponent from '../../testCreateConstructComponent';


const fnAddingElements = (element, initialState, setState) => {
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
  const styleComponent = {
    color: getStyle.color,
    borderColor: getStyle.borderColor,
    backgroundColor: getStyle.backgroundColor,
    width: getStyle.width,
    height: getStyle.height,
    borderRadius: getStyle.borderRadius,
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

// export const fnComponentConstruct = (data) => {
//   const setImports = new Set(data.map(item => item.importComponent));
//   const imports = Array.from(setImports).join('\n');
//   const elements = data.map(ele => ele.htmlElement);
//
//
//   const Component =
//     <TestCreateConstructComponent>
//       <h1
//         style={{ textAlign: 'center', color: 'red' }}
//       >
//         hello
//       </h1>
//       {elements && elements.map((element, index) => (
//         <Fragment key={index}>
//           {element}
//         </Fragment>
//       ))}
//     </TestCreateConstructComponent>
//   return Component;
// }

export const SelectButton = ({getComponent, stateElement}) => {
  const [openComponent, setOpenComponent] = useState(false);
  const {arrElement, setArrElement} = stateElement;


  // useEffect(() => {
  //   if (arrElement.length) {
  //     const componentJSX = fnComponentConstruct(arrElement);
  //     getComponent(componentJSX);
  //   }
  // }, [arrElement]);

  return (
    <Box
      sx={{
        border: '1px solid black',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography>
          выбрать компонет конопки
        </Typography>
        <button
          onClick={() => setOpenComponent(!openComponent)}
          style={{
            // width: '50px',
          }}
        >
          +
        </button>
      </Box>
      <Box
        onClick={(e) => {
          const selectedElement = e.target;
          fnAddingElements(selectedElement, arrElement, setArrElement);
        }}
        sx={{
          width: 'auto',
          height: openComponent ? 'auto' : '0px',
          overflow: 'hidden',
          transition: '500ms height linear'
        }}
      >
        <RenderDataSelectComponentButton data={dataSelectComponent.button.variant}/>
      </Box>
    </Box>
  )
}