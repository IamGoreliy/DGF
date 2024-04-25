import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box, Button,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import {useRouter} from 'next/router';
import { CustomTablePagination } from '../../components/CustomTablePagination';
import { useState } from 'react';


const counterEntries = (initialState, currentNumOfEntries) => {

}
export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    changeRowPerPage,
    onSelectAll,
    onSelectOne,
    rowsPerPage = 0,
    selected = [],
    openModal = {},
    buttonPageNav = () => {},
    data,
    deleteOffers = () => {},
  } = props;
  const {isOpenModal, setIsOpenModal} = openModal;
  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);


  return (
    <>
      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAll}
                      indeterminate={selectedSome}
                      onChange={(event) => {
                        if (event.target.checked) {
                          onSelectAll?.();
                        } else {
                          onDeselectAll?.();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                    Email
                  </TableCell>
                  <TableCell>
                    дата создания продукта
                  </TableCell>
                  <TableCell>
                    Имя продукта
                  </TableCell>
                  <TableCell>
                    показать
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((customer) => {
                  const isSelected = selected.includes(customer.id);
                  const {id, id_user: userId, user_name: userName, user_email: userEmail, user_avatar: userAvatar, title, date} = customer

                  return (
                    <TableRow
                      hover
                      key={id}
                      selected={isSelected}
                      sx={{

                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={(event) => {
                            if (event.target.checked) {
                              onSelectOne?.(customer.id);
                            } else {
                              onDeselectOne?.(customer.id);
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={2}
                        >
                          <Avatar src={userAvatar}>
                            {getInitials(userName)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {userName}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {userEmail}
                      </TableCell>
                      <TableCell>
                        {date}
                      </TableCell>
                      <TableCell>
                        {title}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            setIsOpenModal({
                              ...isOpenModal,
                              idOffers: id,
                              isOpen: !isOpenModal.isOpen,
                              whichModalIsOpen: isOpenModal.whichModalIsOpen === ''
                                ? 'preview'
                                : ''
                            })
                          }}
                        >
                          open
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <CustomTablePagination
          rowsPerPage={rowsPerPage}
          data={data}
          allEntries={count}
          buttonNav={buttonPageNav}
          changeRowPerPage={changeRowPerPage}
          deleteOffers={deleteOffers}
          selectedOffers={selected}
        />
      </Card>
    </>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
