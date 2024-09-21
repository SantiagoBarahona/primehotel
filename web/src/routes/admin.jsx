import { createBrowserRouter } from "react-router-dom";
import { AdminHome } from "../components/admin/AdminHome.jsx";
import { AdminSignin } from "../components/admin/AdminSignin.jsx";
import { AdminSignupForm } from "../components/admin/AdminSignupForm.jsx"
import { CreateHotel, HotelCreatedSuccessfully } from "../components/hotel/CreateHotel.jsx";
import ProtectedAdminRoute from "../components/admin/ProtectedAdminRoute.jsx";

export const adminRouter = createBrowserRouter([
  {
    path: "/admin",
    element:
      <ProtectedAdminRoute>
        <AdminHome />
      </ProtectedAdminRoute>
    ,
    children: [
      {
        path: 'create-hotel',
        element: <CreateHotel />
      },
      {
        path: "create-hotel-success",
        element: <HotelCreatedSuccessfully />
      }
    ],
  },
  {
    path: 'admin/signin',
    element: <AdminSignin />
  },
  {
    path: 'admin/signup',
    element: <AdminSignupForm />
  }
]);