import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useState, useRef } from 'react';
const moment = require('moment');

export const CustomDatePicker = (props) => {
  const {sx, selectDate, clearDate} = props;
  const [valueDateInput, setValueDateInput] = useState(null);

  useEffect(() => {
    const selectedDate = valueDateInput ? moment(valueDateInput).format('YYYY-MM-DD') : null;
    selectDate(selectedDate);
  }, [valueDateInput]);

  useEffect(() => {
    setValueDateInput(null);
  }, [clearDate]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
    >
      <DatePicker
        onChange={(e) => setValueDateInput(e)}
        value={valueDateInput}
        format='DD-MM-YYYY'
        label="Select Date"
        sx={sx}
      />
    </LocalizationProvider>
  )
}