import {Layout as DashboardLayout} from '../layouts/dashboard/layout';
import { useEffect, useRef } from 'react';

const Page = () => {
  const countRef = useRef(0);
  useEffect(() => {
    console.log('count', ++countRef.current);
  }, []);
  return (
    <>
      <h1>test page</h1>
    </>
  )
}

Page.getLayout = (page) => {
  return(
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )

}

export default Page