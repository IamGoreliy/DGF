import { Box, Button, Container, Typography, Select, MenuItem } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import {ArrowTop as ButtonArrowForPagination} from '../styledComponent/svgComponents';

const handleChange = ({target: {value}}, setSelectValue, changeRows, fnStartNum) => {
  setSelectValue(value);
  changeRows(value);
  fnStartNum(1);
}

const handleForPaginationPlus = (startNum, currentComingRec, fnStart) => {
  fnStart(startNum + currentComingRec);
}

const handleForPaginationMinus = (startNum, rowPerPage, fnStart) => {
  fnStart(startNum - rowPerPage);
}

export const CustomTablePagination = ({ rowsPerPage, data, allEntries, buttonNav, changeRowPerPage, deleteOffers, selectedOffers}) => {
  const [selectValue, setSelectValue] = useState(rowsPerPage);
  const [startNumOfRec, setStartNumOfRec] = useState(1);
  const [totalComingRec, setTotalComingRec] = useState(null);

  useEffect(() => {
    if (data.hasOwnProperty(['currentOffers'])){
      const {currentOffers} = data;
      setTotalComingRec(currentOffers);
    }
  }, [data]);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '60px',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
          borderRadius: '0px 0px 20px 20px',
          padding: '10px',
        }}
      >
        <Container
          maxWidth={'custXl'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Button
              onClick={() => deleteOffers(selectedOffers)}
              variant={'outlined'}
              color={'error'}
              disabled={!selectedOffers.length}
            >
              удалить
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
              columnGap: '20px'

            }}
          >
            <Typography>
              Rows per page:
            </Typography>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectValue}
              label="Page"
              onChange={(event) => {
                handleChange(event, setSelectValue, changeRowPerPage, setStartNumOfRec);
              }}
              sx={{
                width: '70px',
                height: '40px',
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
            <Typography>
              {startNumOfRec} of {allEntries}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                columnGap: '10px',
              }}
            >
              <Button
                variant={'outlined'}
                onClick={() => {
                  buttonNav('minus');
                  handleForPaginationMinus(startNumOfRec, rowsPerPage, setStartNumOfRec);
                }}
                sx={{
                  minWidth: '20px',
                  padding: '10px 15px',
                }}
                disabled={startNumOfRec === 1}
              >
                <ButtonArrowForPagination
                  sx={{
                    rotate: '-90deg',
                    width: '15px',
                    height: '15px',
                  }}
                />
              </Button>
              <Button
                variant={'outlined'}
                onClick={() => {
                  buttonNav('plus');
                  handleForPaginationPlus(startNumOfRec, totalComingRec, setStartNumOfRec);
                }}
                sx={{
                  minWidth: '20px',
                  padding: '10px 15px',
                }}
                disabled={startNumOfRec + totalComingRec > allEntries}
              >
                <ButtonArrowForPagination
                  sx={{
                    rotate: '90deg',
                    width: '15px',
                    height: ' 15px',
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}