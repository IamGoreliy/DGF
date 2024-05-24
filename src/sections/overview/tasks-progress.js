import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
  Avatar,
  Box, Button,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import {CustomSelect} from '../../components/CustomSelect';

export const TasksProgress = (props) => {
  const { value, sx, selectMonth } = props;


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
              gutterBottom
              variant="overline"
            >
              application processing progress
            </Typography>
            <Typography variant="h4">
              {value}%
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ListBulletIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              columnGap: '20px',
              alignItems: 'center'
            }}
          >
            <LinearProgress
              value={value}
              variant="determinate"
              sx={{
                // width: 'auto'
                flexBasis: 'calc(100% / 0.3)'
              }}
            />
            <CustomSelect
              selectDateFn={selectMonth}
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
