import { TableBody, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { boolean } from 'yup';

const isViewAllOffers = (orders) => {
  return orders.map(ele => {
    const {id, offer_name: offerName, user_initials: userInitials, user_phone: userPhone, user_mail: userMail, application_date: offerDate} = ele;
    return (
      <TableRow
        key={id}
      >
        <TableCell>
          {offerName}
        </TableCell>
        <TableCell>
          {userInitials}
        </TableCell>
        <TableCell>
          {userPhone}
        </TableCell>
        <TableCell>
          {userMail}
        </TableCell>
        <TableCell>
          {offerDate}
        </TableCell>
      </TableRow>
    )
  })
};

export const ParseOrders = (props) => {
  const {orders = [], isTornOnAllViewOrder = false} = props;
  const [ordersRender, setOrderRender] = useState([]);

  useEffect(() => {
    const arr = [];
    if (!isTornOnAllViewOrder) {
      let startPos = 0;
      while (startPos < 5) {
        arr.push(orders[startPos]);
        startPos += 1;
      }
      setOrderRender(arr);
    } else {
      setOrderRender([...orders]);
    }

  }, [isTornOnAllViewOrder]);

  return (
    <>
      <TableBody>
        {isViewAllOffers(ordersRender)}
      </TableBody>
    </>
  )
}