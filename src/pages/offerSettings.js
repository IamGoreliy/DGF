import {Layout as DashboardLayout} from '../layouts/dashboard/layout';
import { Box, Button, Container, Typography } from '@mui/material';
import {checkUsersFetch} from '../utils/custFetch';

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
          <Button
            variant={'outlined'}
            onClick={async () => {
              const a = await checkUsersFetch('testmail', 'testpass');
            }}
          >
            проверка сервера
          </Button>
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