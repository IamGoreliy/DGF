import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import { useEffect, useState } from 'react';
const debounce = require('lodash.debounce');

const changeSearchInput = debounce((value, fnSetState) => {
  fnSetState(value);
}, 500)

export const CustomersSearch = ({searcher, rowsPerPage, preLoader}) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
      searcher(searchInput, rowsPerPage, preLoader);
  }, [searchInput, rowsPerPage, preLoader]);

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        onChange={({target: {value}}) => changeSearchInput(value, setSearchInput)}
        defaultValue={searchInput}
        fullWidth
        placeholder="Search offersr"
        startAdornment={(
          <InputAdornment position="start">
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}
        sx={{ maxWidth: 500 }}
      />
    </Card>
)};
