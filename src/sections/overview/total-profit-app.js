import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  Button,
  Box
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomDatePicker } from '../../components/CustomDatePicker';




export const TotalProfitApplication = (props) => {
  const { value, sx, totalDayCurMonth, selectDateFn } = props;
  const [selectDate, setSelectDate] = useState('');
  const [deleteData, setDeleteData] = useState(false);


  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              total applications
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack
          sx={{
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              columnGap: '10px'
            }}
          >
            <CustomDatePicker
              selectDate={selectDateFn}
              clearDate={deleteData}
            />
            <Button
              onClick={() => setDeleteData(!deleteData)}
              title='current month'
              variant={'contained'}
            >
              All
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>

  );
};

TotalProfitApplication.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
