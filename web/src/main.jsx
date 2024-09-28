import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { adminRouter } from "./routes/admin.jsx";
import { AuthProvider } from './context/AuthProvider.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SnackbarProvider from './context/SnackbarProvider.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
        <RouterProvider router={adminRouter} />
      </SnackbarProvider>
    </ThemeProvider>
  </AuthProvider >
)
