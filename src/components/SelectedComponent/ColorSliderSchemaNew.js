import { Box, Button, Container, Slider, Input, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

const colorPalletForColorSchema = ['FFF8DB' , 'FFC7ED', '7D8ABC', '304463', '850F8D', 'C738BD', '8E3E63', 'CAE6B2', 'F1F1F1', '1A4D2E', '4F6F52', '615EFC', '7E8EF1', 'E49BFF', 'FFCBCB', 'FFB1B1', 'EADBC8', 'DAC0A3', 'B3C8CF', 'BED7DC', 'D20062', 'D6589F', 'D895DA', 'C4E4FF', 'FFF7FC', '8B93FF', '5755FE', 'FF71CD', '222831', '31363F', '240A34', '76ABAE', '891652', 'EABE6C', 'FFEDD8', 'EADFB4', '9BB0C1', '51829B', 'F6995C', 'FFE6E6', 'E1AFD1', 'AD88C6', '7469B6', 'FF407D', '40679E', '1B3C73', 'F2F597', '80BCBD', 'AAD9BB', 'D5F0C1', 'BEADFA', 'D0BFFF', 'DFCCFB', '1AACAC', '2E97A7', '4C0033', '790252', 'AF0171', 'E80F88'];

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

const initialStateColor = {
  red: 0,
  green: 0,
  blue: 0,
  transparent: 100,
  colorName: 'default',
}

export const ColorSliderSchemaNew = () => {
  const [redSliderValue, setRedSliderValue] = useState(0);
  const [greenSliderValue, setGreenSliderValue] = useState(0);
  const [blueSliderValue, setBlueSliderValue] = useState(0);
  const [transparentSliderValue, setTransparentSliderValue] = useState(100);
  const [saveColor, setSaveColor] = useState(false);
  const [colorName, setColorName] = useState('');
  const whatColors = useRef(initialStateColor);

  useEffect(() => {
    if (saveColor) {
      const color = createColor(setSaveColor, redSliderValue, greenSliderValue, blueSliderValue, transparentSliderValue);
    }
  }, [saveColor]);

  const showColors = useCallback(() => {
    const red = whatColors.current.red;
    const green = whatColors.current.green;
    const blue = whatColors.current.blue;
    const transparent = whatColors.current.transparent;
    const colorName = whatColors.current.colorName;

    if (red !== redSliderValue || green !== greenSliderValue || blue !== blueSliderValue || transparent !== transparentSliderValue) {
      const currentColors = {
        red: redSliderValue,
        green: greenSliderValue,
        blue: blueSliderValue,
        transparent: transparentSliderValue,
      }
      whatColors.current = {...currentColors};
      setColorName('');
      return colorExample(redSliderValue, greenSliderValue, blueSliderValue, transparentSliderValue);
    }

    if (colorName !== '') {
      return colorName;
    }

  }, [redSliderValue, greenSliderValue, blueSliderValue, transparentSliderValue, colorName])

  const handleChange = (event) => {
    setColorName(event.target.value);
  };

  return (
    <Box
      sx={{
        mt: 2
      }}
    >
      <Container
        maxWidth={'custXl'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '20px',
        }}
      >
        <Box>
          <Box
            sx={{
              width: '20px',
              height: '20px',
              backgroundColor: showColors(),
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
        </Box>
        <Box>
          <Input
            color="primary"
            placeholder="serch color"
            variant="solid"
          />
          <FormControl
            sx={{
              marginTop: '20px',
            minWidth: 130
          }}>
            <InputLabel id="demo-simple-select-autowidth-label">select color</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={colorName}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>default</em>
              </MenuItem>
              {colorPalletForColorSchema.map(colorName => {
                return (
                  <MenuItem
                    key={colorName}
                    value={colorName}
                  >
                    <Box
                      sx={{
                        width: '100px',
                        height: '30px',
                        backgroundColor: '#'+colorName,
                      }}
                    >
                      {colorName}
                    </Box>
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Box>
  )
}