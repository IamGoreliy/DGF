import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import {createPortal} from 'react-dom';
import { ModalCreateOffer } from '../layouts/offerSettings/modalWindowOffer';
import { getAllOffers, updateData, updateDataNew } from '../utils/custFetch';
import {useSearchParams} from 'next/navigation';
import {useRouter} from 'next/router';

const useCustomers = (data, page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [data, page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const modalInitialState = {
  idOffers: '',
  isOpen: false,
  whichModalIsOpen: '',
};

const Page = ({data}) => {
  const [testDataRen, setTestDataRen] = useState(data)
  const [dataRender, setDataRender] = useState(testDataRen.offerData);
  const [totalEntries, setTotalEntries] = useState(testDataRen.totalRecords);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(dataRender, page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const [isOpenModal, setIsOpenModal] = useState(modalInitialState);
  const [preLoadingData, setPreLoadingData] = useState(0);
  const [dataIsChange, setDataIsChange] = useState({});
  const firstRender = useRef(false);

  useEffect(() => {
    setPreLoadingData(0);
  }, [rowsPerPage])

  useEffect( ()  => {
    const abortController = new AbortController;
    const signal = abortController.signal;
    if (firstRender.current) {
      updateData(signal, rowsPerPage, preLoadingData)
        .then(data => {
          setTestDataRen(data);
        })
        .catch(res => console.log(res))

      return () => {
        abortController.abort();
      };
    }
    firstRender.current = true;

  }, [dataIsChange, rowsPerPage, preLoadingData]);

  useEffect(() => {
    setDataRender(testDataRen.offerData);
    setTotalEntries(testDataRen.totalRecords);
  }, [testDataRen])

  const filterOfferById = useCallback(() => {
    let offer = null;
    if (isOpenModal.idOffers) {
      offer = dataRender.find(ele => ele.id === isOpenModal.idOffers);
    }
    return offer;
  },
    [isOpenModal]
  );

  const handlePageChange = useCallback(
    (event, value) => {
      setPreLoadingData(preLoadingData + rowsPerPage);
      setPage(0);
    },
    []
  );

  const handlePageNav = useCallback(
    (operation) => {
      switch (operation) {
        case 'plus':
          setPreLoadingData(preLoadingData + rowsPerPage);
          break;
        case 'minus':
          setPreLoadingData(preLoadingData - rowsPerPage);
          break;
      }
    },
    [preLoadingData, rowsPerPage]
  );


  return (
    <>
      <Head>
        <title>
          Customers | Devias Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  onClick={() => setIsOpenModal({
                    ...isOpenModal,
                    isOpen: !isOpenModal.isOpen,
                    whichModalIsOpen: isOpenModal.whichModalIsOpen === ''
                      ? 'createOffer'
                      : ''
                  })}
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={totalEntries}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              changeRowPerPage={setRowsPerPage}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
              openModal={{isOpenModal, setIsOpenModal}}
              buttonPageNav={handlePageNav}
              data={testDataRen}
            />
          </Stack>
        </Container>
      </Box>
      {isOpenModal.isOpen && createPortal(
        <ModalCreateOffer
          {...{isOpenModal, setIsOpenModal}}
          data={filterOfferById()}
          statusRender={setDataIsChange}
        />, window.document.body)
      }
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Page;

export async function getServerSideProps (context) {
  const data = await getAllOffers(context.query.page, context.query.offset);
  return {
    props: {
      data
    }
  }
}