import { Box, Button, Container, Slider } from '@mui/material';
import { useEffect, useState } from 'react';

const createColor = (setStateColor, redColorValue, greenColorValue, blueColorValue, transparentValue) => {
  const transparentPercentage = +transparentValue / 100;
  const color = `rgba(${redColorValue}, ${greenColorValue}, ${blueColorValue}, ${transparentPercentage})`;
  setStateColor(false);
  return color;
}

const colorExample = (redColorValue, greenColorValue, blueColorValue, transparentValue) => {
  const transparentPercentage = +transparentValue / 100;
  return `rgba(${redColorValue}, ${greenColorValue}, ${blueColorValue}, ${transparentPercentage})`;
}

export const ColorSliderSchama = ({changeValueInput}) => {
  const [redSliderValue, setRedSliderValue] = useState(0);
  const [greenSliderValue, setGreenSliderValue] = useState(0);
  const [blueSliderValue, setBlueSliderValue] = useState(0);
  const [transparentSliderValue, setTransparentSliderValue] = useState(100);
  const [saveColor, setSaveColor] = useState(false);
  const {dispatch, ele} = changeValueInput;

  useEffect(() => {
    if (saveColor) {
      const color = createColor(setSaveColor, redSliderValue, greenSliderValue, blueSliderValue, transparentSliderValue);
      dispatch({[`${ele}`]: color});
    }
  }, [saveColor]);

  return (
    <Box
      sx={{
        mt: 2
      }}
    >
      <Container
        maxWidth={'custXl'}
      >
        <Box
          sx={{
            width: '20px',
            height: '20px',
            backgroundColor: colorExample(redSliderValue, greenSliderValue, blueSliderValue, transparentSliderValue),
            ml: 'auto',
            mr: 'auto',
          }}
        >
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px'
          }}
        >
          <Slider
            onChange={({target: {value}}) => setRedSliderValue(+value)}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            max={255}
            sx={{
              width: '200px',
              color: 'red',
            }}
            value={redSliderValue}
          />
          <input
            onChange={({target: {value}}) => {
              const result = +value < 255 ? +value : 255;
              setRedSliderValue(result);
            }}
            type={"number"}
            value={redSliderValue}
            style={{
              width: '50px'
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px'

          }}
        >
          <Slider
            onChange={({target: {value}}) => setGreenSliderValue(+value)}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            max={255}
            sx={{
              width: '200px',
              color: 'green',
            }}
            value={greenSliderValue}
          />
          <input
            onChange={({target: {value}}) => {
              const result = +value < 255 ? +value : 255;
              setGreenSliderValue(result);
            }}
            type={"number"}
            value={greenSliderValue}
            style={{
              width: '50px'
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Slider
            onChange={({target: {value}}) => setBlueSliderValue(+value)}
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            max={255}
            sx={{
              width: '200px',
              color: 'blue',
            }}
            value={blueSliderValue}
          />
          <input
            onChange={({target: {value}}) => {
              const result = +value < 255 ? +value : 255;
              setBlueSliderValue(result)
            }}
            type={"number"}
            value={blueSliderValue}
            style={{
              width: '50px'
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Slider
            onChange={({target: {value}}) => setTransparentSliderValue(+value)}
            size="small"
            defaultValue={100}
            aria-label="Small"
            valueLabelDisplay="auto"
            max={100}
            sx={{
              width: '200px',
              color: 'grey',
            }}
            value={transparentSliderValue}
          />
          <input
            onChange={({target: {value}}) => {
              const result = +value < 100 ? +value : 100;
              setTransparentSliderValue(result)
            }}
            type={"number"}
            value={transparentSliderValue}
            style={{
              width: '50px'
            }}
          />
        </Box>
        <Button
          variant={'contained'}
          onClick={() => setSaveColor(true)}
        >
          save
        </Button>
      </Container>
    </Box>
  )
}