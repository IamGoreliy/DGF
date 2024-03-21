import {Layout as DashboardLayout} from '../layouts/dashboard/layout';
import { Box, Button, Container, Typography } from '@mui/material';
import { CreateOffer } from '../layouts/offerSettings/CreateOffer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth={'xl'}
        >
          <Typography
            variant={'h4'}
          >
            Offers Settings
          </Typography>
          <CreateOffer/>
          <ToastContainer/>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Page;