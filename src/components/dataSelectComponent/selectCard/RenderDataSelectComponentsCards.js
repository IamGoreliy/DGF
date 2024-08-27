import { Box, Button } from '@mui/material';
import { TamplateStandartCard } from './TamplatestandartCard';



export const RenderDataSelectComponentsCards = ({dataComponent}) => {
  return (
    <>
      <Box>
        {dataComponent.length && dataComponent.map(ele => {
          return (
            <Box
              key={ele}
            >
              <Button
                id={'addCard'}
              >
                {ele}
              </Button>
            </Box>
          )
        })}
      </Box>
    </>
  )
}