import { StrictMode } from 'react';
import { CreateCookies } from '../components/CreateCookies';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AuthConsumer, AuthProvider } from '../contexts/auth-context';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
export const TestComponent = () => {
  return (
    <>
      <StrictMode>
        <CreateCookies/>
        <StrictMode>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />

              </ThemeProvider>
            </AuthProvider>
          </LocalizationProvider>
        </StrictMode>
      </StrictMode>
    </>
  )
}