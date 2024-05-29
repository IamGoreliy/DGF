import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Button, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Unprocessed } from 'src/sections/overview/unprocessed';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { TasksProgress } from 'src/sections/overview/tasks-progress';
import { Processed } from 'src/sections/overview/processed';
import { TotalProfitApplication } from 'src/sections/overview/total-profit-app';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { getDeviceStatistic } from '../utils/custFetch';
import { useEffect, useState, createContext, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {CreateOfferMessage} from '../components/createOfferMessage';
const moment = require('moment');


export const ToggleModalMessage = createContext([]);

const filterDevice = (data) => {
   const listDevice = data.reduce((acc, ele) => {
    if (ele['what_device_user'] === 'mobile') {
      acc.phone = acc.phone + 1;
    } else if (ele['what_device_user'] === 'table') {
      acc.tablet = acc.tablet + 1;
    } else if (ele['what_device_user'] === 'pc') {
      acc.desktop = acc.desktop + 1;
    }
    return acc;
  }, {
    desktop: 0,
    tablet: 0,
    phone: 0
  });
   const listDevicesPercentage = {};
   listDevicesPercentage.desktop = Math.round(listDevice.desktop / data.length * 100);
   listDevicesPercentage.tablet = Math.round(listDevice.tablet / data.length * 100);
   listDevicesPercentage.phone = Math.round(listDevice.phone / data.length * 100);
   const devicePercent = Object.entries(listDevicesPercentage).map(ele => ele[1]);
   const quantityDevice = Object.entries(listDevice).map(ele => ele[1]);
   return {devicePercent, quantityDevice};
};

const offersHandler = (offers) => {
  const unprocessedApplications = offers.filter(ele => !ele['offer_has_been_processed']);
  const processedApplications = offers.filter(ele => ele['offer_has_been_processed']);
  const idOffers = offers.map(ele => ele['id_offer']);
  return {unprocessedApplications, processedApplications, idOffers};
}

const Page = ({ data }) => {
  const [dataPage, setDataPage] = useState(data);
  const [statsWhatDevicePercent, setStatsWhatDevicePercent] = useState([]);
  const [totalNumDev, setTotalNumDev] = useState([]);
  const [modalMessage, setModalMessage] = useState(false);
  const [idOffer, setIdOffer] = useState(0);
  const [unprocessed, setUnprocessed] = useState([]);
  const [processed, setProcessed] = useState([]);
  const [idOffersLatestProducts, setIdOffersLatestProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [whatDateRender, setWhatDateRender] = useState(null);
  const [unprocessedBtn, setUnprocessedBtn] = useState(false);
  const [processedBtn, setProcessedBtn] = useState(false);


  useEffect(() => {
    const {devicePercent, quantityDevice} = filterDevice(dataPage.deviceData);
    setStatsWhatDevicePercent(devicePercent);
    setTotalNumDev(quantityDevice);
    const {unprocessedApplications, processedApplications, idOffers} = offersHandler(dataPage.userStatReqOffersCurMonth);
    setUnprocessed(unprocessedApplications);
    setProcessed(processedApplications);
    setIdOffersLatestProducts(idOffers);
  }, [dataPage.deviceData, dataPage.userStatReqOffersCurMonth]);

  useEffect(() => {
    let filterOrdersForDate = dataPage.userStatReqOffersCurMonth;
    if (whatDateRender) {
      filterOrdersForDate = dataPage.userStatReqOffersCurMonth.filter(ele => ele['application_date'] === whatDateRender);
    }
    if (unprocessedBtn) {
      filterOrdersForDate = filterOrdersForDate.filter(ele => ele['offer_has_been_processed'] === 0);
    }
    if (processedBtn) {
      filterOrdersForDate = filterOrdersForDate.filter(ele => ele['offer_has_been_processed'] === 1);
    }
      setOrders(filterOrdersForDate);

  }, [dataPage.userStatReqOffersCurMonth, whatDateRender, unprocessedBtn, processedBtn]);

  const getStatisticNewMonth = useCallback((selectedMonth) => {
    getDeviceStatistic(selectedMonth)
      .then(data => setDataPage(data))
      .catch()
  }, []);

  const toggleProcessedBtn = useCallback((unprocessedBtn, processedBtn) => {
    if (unprocessedBtn) {
      setUnprocessedBtn(false);
    }
    setProcessedBtn(!processedBtn);
  }, [])

  const toggleUnProcessedBtn = useCallback((unprocessedBtn, processedBtn) => {
    if (processedBtn) {
      setProcessedBtn(false);
    }
    setUnprocessedBtn(!unprocessedBtn);
  }, [])

  return (
    <>
      <Head>
        <title>
          ACP | DGFinance SAG
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
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              lg={8}
            >
              <OverviewSales
                chartSeries={[
                  {
                    name: 'This Month',
                    data: dataPage.arrStatsCurMonth,
                  },
                  {
                    name: 'Last Month',
                    data: dataPage.arrStatsLastMonth,
                  }
                ]}
                curDayInMonth={dataPage.arrQuantityCurMonth}
                curStatsOfferPercent={dataPage.arrStatsCurMonthPercent}
                sx={{
                  height: '100%'
                }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewTraffic
                chartSeries={statsWhatDevicePercent}
                labels={['Desktop', 'Tablet', 'Phone']}
                quantity={totalNumDev}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Button
                variant={unprocessedBtn ? 'outlined' : 'text'}
                onClick={() => toggleUnProcessedBtn(unprocessedBtn, processedBtn)}
              >
                <Unprocessed
                  difference={12}
                  positive
                  sx={{ height: '100%' }}
                  value={unprocessed.length}
                />
              </Button>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Button
                variant={processedBtn ? 'outlined' : 'text'}
                onClick={() => toggleProcessedBtn(unprocessedBtn, processedBtn)}
              >
                <Processed
                  difference={16}
                  positive={false}
                  sx={{ height: '100%' }}
                  value={`${processed.length}`}
                />
              </Button>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <TotalProfitApplication
                sx={{ height: '100%' }}
                value={`${dataPage.userStatReqOffersCurMonth.length}` ?? '0'}
                totalDayCurMonth={dataPage.arrQuantityCurMonth}
                selectDateFn={setWhatDateRender}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <TasksProgress
                sx={{ height: '100%' }}
                value={Math.round(processed.length / dataPage.userStatReqOffersCurMonth.length * 100) }
                selectMonth={getStatisticNewMonth}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewLatestProducts
                products={idOffersLatestProducts}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={8}
            >
              <ToggleModalMessage.Provider value={[modalMessage, setModalMessage, setIdOffer]}>
                <OverviewLatestOrders
                  ordersNew={orders}
                  sx={{ height: '100%' }}
                />
              </ToggleModalMessage.Provider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {modalMessage && createPortal(
        <CreateOfferMessage
          fnToggleModal={[modalMessage, setModalMessage]}
          fnSetOfferId={[idOffer, setIdOffer]}
          data={dataPage.userStatReqOffersCurMonth.find(ele => ele.id === idOffer)}
        />, window.document.body)}
    </>
  );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

export async function getServerSideProps (){
  const data = await getDeviceStatistic();
  return {
    props: {
      data
    }
  }
}