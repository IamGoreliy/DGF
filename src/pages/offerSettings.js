import {Layout as DashboardLayout} from '../layouts/dashboard/layout';
import { Box, Button, Container, Typography } from '@mui/material';
import {checkUsersFetch} from '../utils/custFetch';
import { CreateOffer } from '../layouts/offerSettings/CreateOffer';

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