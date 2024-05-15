import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import {ToggleModalMessage} from '../pages/dashboard';

const isViewAllOffers = (orders, modalMessage, setModalMessage, setIdOffer) => {
  return orders.map(ele => {
    const {
      id,
      offer_name: offerName,
      user_initials: userInitials,
      user_phone: userPhone,
      user_mail: userMail,
      application_date: offerDate,
      message,
      date_set_message: dateAdminMessage,
      name_admin: adminName
    } = ele;
    return (
      <TableRow
        key={id}
        sx={{
          backgroundColor: message !== null ? 'rgba(113, 225, 113, 0.4)' : 'rgba(252, 74, 74, 0.4)',
        }}
      >
        <TableCell>
          {offerName}
        </TableCell>
        <TableCell>
          {userInitials}
        </TableCell>
        <TableCell>
          <a href={`tel:${userPhone}`}>
            {userPhone}
          </a>
        </TableCell>
        <TableCell>
          <a href={`mailto:${userMail}`}>
            {userMail}
          </a>
        </TableCell>
        <TableCell>
          {offerDate}
        </TableCell>
        <TableCell>
          <p title={`${adminName}`}>
            {dateAdminMessage ? dateAdminMessage : '---- -- --'}
          </p>
        </TableCell>
        <TableCell>
          <Button
            onClick={() => {
              setIdOffer(id);
              setModalMessage(!modalMessage);
            }}
            variant={'outlined'}
          >
            message
          </Button>
        </TableCell>
      </TableRow>
    )
  })
};

export const ParseOrders = (props) => {
  const {orders = [], isTornOnAllViewOrder = false} = props;
  const [ordersRender, setOrderRender] = useState([]);
  const [modalMessage, setModalMessage, setIdOffer] = useContext(ToggleModalMessage);


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
        {isViewAllOffers(ordersRender, modalMessage, setModalMessage, setIdOffer)}
      </TableBody>
    </>
  )
}