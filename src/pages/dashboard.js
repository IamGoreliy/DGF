import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
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
import { useEffect, useState, createContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import {CreateOfferMessage} from '../components/createOfferMessage';
const moment = require('moment');


const now = new Date();

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
  return {unprocessedApplications, processedApplications};
}

const Page = ({
  data: {
    deviceData,
    arrQuantityCurMonth,
    arrStatsCurMonth,
    arrStatsCurMonthPercent,
    arrQuantityLastMonth,
    arrStatsLastMonth,
    arrStatsLastMonthPercent,
    userStatReqOffersCurMonth
  }
}) => {
  const [statsWhatDevicePercent, setStatsWhatDevicePercent] = useState([]);
  const [totalNumDev, setTotalNumDev] = useState([]);
  const [modalMessage, setModalMessage] = useState(false);
  const [idOffer, setIdOffer] = useState(0);
  const [unprocessed, setUnprocessed] = useState([]);
  const [processed, setProcessed] = useState([]);
  const [orders, setOrders] = useState([]);
  const [whatDateRender, setWhatDateRender] = useState(null);
  const [whatMonthRender, setWhatMonthRender] = useState(moment().format('YYYY-MM'));
  const firstRender = useRef(false);

  

  useEffect(() => {
    const {devicePercent, quantityDevice} = filterDevice(deviceData);
    setStatsWhatDevicePercent(devicePercent);
    setTotalNumDev(quantityDevice);
    const {unprocessedApplications, processedApplications} = offersHandler(userStatReqOffersCurMonth);
    setUnprocessed(unprocessedApplications);
    setProcessed(processedApplications);
  }, [deviceData, userStatReqOffersCurMonth]);

  useEffect(() => {
    if (whatDateRender) {
      const filterOrdersForDate = userStatReqOffersCurMonth.filter(ele => ele['application_date'] === whatDateRender);
      setOrders(filterOrdersForDate);
    } else {
      setOrders(userStatReqOffersCurMonth);
    }
  }, [userStatReqOffersCurMonth, whatDateRender]);

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
                    data: arrStatsCurMonth,
                  },
                  {
                    name: 'Last Month',
                    data: arrStatsLastMonth,
                  }
                ]}
                curDayInMonth={arrQuantityCurMonth}
                curStatsOfferPercent={arrStatsCurMonthPercent}
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
              <Unprocessed
                difference={12}
                positive
                sx={{ height: '100%' }}
                value={unprocessed.length}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <Processed
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value={`${processed.length}`}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <TotalProfitApplication
                sx={{ height: '100%' }}
                value={`${userStatReqOffersCurMonth.length}`}
                totalDayCurMonth={arrQuantityCurMonth}
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
                value={Math.round(processed.length / userStatReqOffersCurMonth.length * 100)}
                selectMonth={setWhatMonthRender}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewLatestProducts
                products={[
                  {
                    id: '5ece2c077e39da27658aa8a9',
                    image: '/assets/products/product-1.png',
                    name: 'Healthcare Erbology',
                    updatedAt: subHours(now, 6).getTime()
                  },
                  {
                    id: '5ece2c0d16f70bff2cf86cd8',
                    image: '/assets/products/product-2.png',
                    name: 'Makeup Lancome Rouge',
                    updatedAt: subDays(subHours(now, 8), 2).getTime()
                  },
                  {
                    id: 'b393ce1b09c1254c3a92c827',
                    image: '/assets/products/product-5.png',
                    name: 'Skincare Soja CO',
                    updatedAt: subDays(subHours(now, 1), 1).getTime()
                  },
                  {
                    id: 'a6ede15670da63f49f752c89',
                    image: '/assets/products/product-6.png',
                    name: 'Makeup Lipstick',
                    updatedAt: subDays(subHours(now, 3), 3).getTime()
                  },
                  {
                    id: 'bcad5524fe3a2f8f8620ceda',
                    image: '/assets/products/product-7.png',
                    name: 'Healthcare Ritual',
                    updatedAt: subDays(subHours(now, 5), 6).getTime()
                  }
                ]}
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
          data={userStatReqOffersCurMonth.find(ele => ele.id === idOffer)}
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