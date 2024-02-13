import { Box, Container } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import { dataPartners } from './sectionPartners/dataSectionPartners';
import {Grid} from '@mui/material';
import {CustH2} from '../../styledComponent/StyledComponent';

const WrapperPartners = styled.div`
    background-color: #0C1A36;
    padding: clamp(80px,7.5vw,120px) 0 clamp(80px,11.25vw,180px);
`



export const SectionPartners = () => {
  return (
    <WrapperPartners>
      <Container
        maxWidth={'custXl'}
      >
        <CustH2
          color={'white'}
          widthB={'4rem'}
          heightB={'3px'}
          topB={'-10px'}
          leftB={'0px'}
          bgcB={'yellow'}
        >
          НАШІ ПАРТНЕРИ
        </CustH2>
        <Grid
          container
          spacing={2}
          columns={6}
        >
          {dataPartners.map(ele => {
            return (
              <Grid
                key={ele.id}
                item
                xs={6}
                md={1}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'clamp(120px,11.875vw,190px)',
                    backgroundColor: 'white',
                  }}
                >
                <Image
                  src={ele.urlImg}
                  alt='logo brand'
                  style={{
                    width: '80%',
                    height: '100%',
                  }}
                />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </WrapperPartners>
  )
}