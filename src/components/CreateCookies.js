import { useEffect } from 'react';
import deviceCheck from '../utils/deviceСhecker';

export const CreateCookies = () => {
  useEffect(() => {
    deviceCheck();
  }, []);
  return (
    <>
    </>
  )
}