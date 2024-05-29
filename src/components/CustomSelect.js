import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
const moment = require('moment');


const nameMonth = [
  {nameMonth: 'Jan', descMonth: '2024-01'},
  {nameMonth: 'Feb', descMonth: '2024-02'},
  {nameMonth: 'Mar', descMonth: '2024-03'},
  {nameMonth: 'Apr', descMonth: '2024-04'},
  {nameMonth: 'May', descMonth: '2024-05'},
  {nameMonth: 'Jun', descMonth: '2024-06'},
  {nameMonth: 'Jul', descMonth: '2024-07'},
  {nameMonth: 'Aug', descMonth: '2024-08'},
  {nameMonth: 'Sep', descMonth: '2024-09'},
  {nameMonth: 'Oct', descMonth: '2024-10'},
  {nameMonth: 'Nov', descMonth: '2024-11'},
  {nameMonth: 'Dec', descMonth: '2024-12'},
];

const createMenuItemFromSelect = (arr) => {
  return arr.map((ele, idx) => {
    return(
      <MenuItem
        key={idx}
        value={ele.descMonth}
      >
        {ele.nameMonth}
      </MenuItem>
    )
  })
};
export const CustomSelect = ({selectDateFn}) => {
  const currentMonth = moment().format('YYYY-MM');
  const [selectValue, setSelectValue] = useState(currentMonth);


  // useEffect(() => {
  //   selectDateFn(selectValue);
  // }, [selectValue]);

  return (
    <>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-controlled-open-select-label">Month</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            // open={open}
            // onClose={handleClose}
            // onOpen={handleOpen}
            value={selectValue}
            label="Month"
            onChange={(e) => {
              const selectValue = e.target.value;
              setSelectValue(selectValue);
              selectDateFn(selectValue);
            }}
            MenuProps={{
              MenuListProps: {
                style: {
                  maxHeight: '200px',
                }
              },
            }}
            sx={{
              height: '40px'
            }}
          >
            <MenuItem value={currentMonth}>Current Month</MenuItem>
            {createMenuItemFromSelect(nameMonth)}
          </Select>
      </FormControl>
    </>
  )
}