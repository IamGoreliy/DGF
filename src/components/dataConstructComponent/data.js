import { Button, Card } from '@mui/material';
import { TamplateStandartCard } from '../dataSelectComponent/selectCard/TamplatestandartCard';


const moveElement = (event) => {
  const element = event.currentTarget;
  console.log(element)
  element.style.position = 'absolute';

  function moveAt (event, element) {
    // console.log('element.style.left', element.style.left, 'event.pageX', event.pageX)
    element.style.left = event.pageX - 300 + 'px';
    element.style.top = event.pageY - 440 + 'px';

  }

  moveAt(event, element);

  const testCon = document.getElementById('testConteiner');
  

  testCon.onmousemove = function (event) {
    moveAt(event, element);
  }
  element.onmouseup = function () {
    testCon.onmousemove = null;
    element.onmouseup = null;
  }
}

export const dataElemets = [
  {
    nameElement: 'button',
    variant: [
      {
        variantName: 'contained',
        htmlElement: <Button
          onMouseDownCapture={(e) => moveElement(e)}
          variant={'contained'}
          size={'medium'}
        >
          test
        </Button>,
        importComponent: `import {Button} from '@mui/material';`,

      },
      {
        variantName: 'text',
        htmlElement: <Button
          onMouseDown={(e) => moveElement(e)}
          variant={'text'}
          size={'medium'}
        >
          test
        </Button>,
        importComponent: `import {Button} from '@mui/material';`,

      },
      {
        variantName: 'outlined',
        htmlElement: <Button
          onMouseDown={(e) => moveElement(e)}
          variant={'outlined'}
          size={'medium'}
        >
          test
        </Button>,
        importComponent: `import {Button} from '@mui/material';`,
      }
    ],
  },
  {
    nameElement: 'card',
    variant: [
      {
        variantName: 'standard',
        htmlElement: <Card
          onMouseDown={(e) => moveElement(e)}
          sx={{
            maxWidth: 345
          }}>
          <TamplateStandartCard/>
        </Card>
      }
    ]
  }
]

