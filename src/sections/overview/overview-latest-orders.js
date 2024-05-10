import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { useState } from 'react';
import { ParseOrders } from '../../components/ParseOrders';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], ordersNew = [], sx } = props;
  const [isTurnOnViewAll, setIsTurnOnViewAll] = useState(false);

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar sx={{ flexGrow: 1, maxHeight: 430 }}>
        <Box sx={{
          minWidth: 800,

        }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name Offer
                </TableCell>
                <TableCell>
                  Client
                </TableCell>
                <TableCell sortDirection="desc">
                  Phone
                </TableCell>
                <TableCell>
                  Mail
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            {/*<TableBody>*/}
            {/*  {orders.map((order) => {*/}
            {/*    const createdAt = format(order.createdAt, 'dd/MM/yyyy');*/}

            {/*    return (*/}
            {/*      <TableRow*/}
            {/*        hover*/}
            {/*        key={order.id}*/}
            {/*      >*/}
            {/*        <TableCell>*/}
            {/*          {order.ref}*/}
            {/*        </TableCell>*/}
            {/*        <TableCell>*/}
            {/*          {order.customer.name}*/}
            {/*        </TableCell>*/}
            {/*        <TableCell>*/}
            {/*          {createdAt}*/}
            {/*        </TableCell>*/}
            {/*        <TableCell>*/}
            {/*          <SeverityPill color={statusMap[order.status]}>*/}
            {/*            {order.status}*/}
            {/*          </SeverityPill>*/}
            {/*        </TableCell>*/}
            {/*      </TableRow>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</TableBody>*/}
            <ParseOrders
              orders={ordersNew}
              isTornOnAllViewOrder={isTurnOnViewAll}
            />
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          onClick={() => setIsTurnOnViewAll(!isTurnOnViewAll)}
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
