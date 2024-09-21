import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { adminRouter } from "./routes/admin.jsx";
import { AuthProvider } from './context/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={adminRouter} />
  </AuthProvider>
)
