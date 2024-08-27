import { Button, Box, Typography } from '@mui/material';
import { cloneElement, useEffect, useState } from 'react';
import { RenderDataSelectComponentsCards } from './RenderDataSelectComponentsCards';
import dataSelectComponent from '../dataSelectComponent';
import { dataElemets } from '../../dataConstructComponent/data';

const fnAddElement = (element, initialState,setState) => {
  const btnAddElementId = element.id;
  const btnContent = element.textContent;
  if (btnAddElementId !== 'addCard') {
    return;
  }

  const variantElement = dataElemets.find(ele => ele.nameElement === "card").variant.find(ele => ele.variantName === btnContent);

  const newElement = {
    htmlElement: cloneElement(variantElement.htmlElement, {

    })
  }

  setState([...initialState, newElement])
}

export const SelectCard  = ({getComponent, stateElement}) => {
  const [toggleSelectComponent, setToggleSelectComponent] = useState(false);
  const {arrElement, setArrElement} = stateElement;

  // useEffect(() => {
  //   if (arrElement.length) {
  //     getComponent(arrElement);
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
          justifyContent: 'space-between',
        }}
      >
        <Typography>
          выбрать компонент карточки
        </Typography>
        <button
          onClick={() => setToggleSelectComponent(!toggleSelectComponent)}
        >
          +
        </button>
      </Box>
      <Box
        onClick={(e) => {
          const element = e.target;
          fnAddElement(element, arrElement, setArrElement);
        }}
        sx={{
          width: 'auto',
          height: toggleSelectComponent ? 'auto' : '0px',
          overflow: 'hidden',
          transition: '500ms height linear'
        }}
      >
        <RenderDataSelectComponentsCards dataComponent={dataSelectComponent.card.variant}/>
      </Box>
    </Box>
  )
}