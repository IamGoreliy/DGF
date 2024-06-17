import { Box, Button, Slider } from '@mui/material';
import { useState, useReducer } from 'react';
import { ColorSliderSchama } from '../../colorSliderSchama';
import { borderRadius, height } from '@mui/system';

const initialState = {
  textButton: '',
  color: '',
  borderColor: '',
  backgroundColor: '',
  width: '',
  height: '',
  borderRadius: '',
}

const keysInitialState = Object.keys(initialState);

const reducer = (state, action) => {
  return {...state, ...action}
}

const controlElementProperty = (elementProperty, dispatchReducer, valueInput) => {
  const exclusion = ['width', 'height', 'borderRadius'];
  let result = valueInput;
  if (exclusion.includes(elementProperty)) {
    result = `${valueInput}px`;
  }
  dispatchReducer({ [elementProperty]: result });
}

export const RenderDataSelectComponentButton = ({ data }) => {
  const [optionElement, setOptionElement] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [colorOption, setColorOption] = useState('');


  return (
    <Box>
      {data && data.map(variantButton => {
        return (
            <Box
              key={`${variantButton}`}
            >
              <Button
                id={'elementConstruct'}
                variant={variantButton}
                sx={{
                  color: optionElement === variantButton ? state.color : 'auto',
                  borderColor: optionElement === variantButton ? state.borderColor : 'auto',
                  '&:hover': {
                    borderColor: state.borderColor,
                  },
                  backgroundColor: optionElement === variantButton && state.backgroundColor,
                  width: optionElement === variantButton ? state.width : 'auto',
                  height: optionElement === variantButton ? state.height : 'auto',
                  borderRadius: optionElement === variantButton ? state.borderRadius : 'auto',
                }}
              >
                {optionElement === variantButton ? state.textButton : 'text'}
              </Button>
              <button
                onClick={() => {
                  if (optionElement === '') {
                    setOptionElement(variantButton)
                  } else {
                    setOptionElement('');
                  }
                }}
              >
                add option
              </button>
              <Box
                sx={{
                  width: '100%',
                  height: optionElement === variantButton ? '230px' : '0px',
                  border: '1px solid black',
                  overflow: 'auto',
                }}
              >
                {keysInitialState.length && keysInitialState.map(ele => {
                  return (
                    <Box
                      key={ele}
                    >
                      <label>
                        <input
                          onChange={({ target: { value } }) => controlElementProperty(ele, dispatch, value)}
                          value={state['ele']}
                          type={"text"}
                          placeholder={ele}
                        />
                        {ele.toLowerCase().includes('color') &&
                          <button
                            onClick={() => {
                              if(!colorOption){
                                setColorOption(ele);
                              } else {
                                setColorOption('');
                              }
                            }}
                          >
                            +
                          </button>
                        }
                      </label>
                      {ele.toLowerCase().includes('color') && colorOption === ele && <ColorSliderSchama changeValueInput={{dispatch, ele}}/>}
                    </Box>
                  )
                })}

              </Box>
            </Box>
        )
      })}
    </Box>
  )
}