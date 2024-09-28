import { createBrowserRouter } from "react-router-dom";
import { AdminSignin } from "../components/admin/AdminSignin.jsx";
import { AdminSignupForm } from "../components/admin/AdminSignupForm.jsx"
import { Hotels } from "../components/hotel/Hotels.jsx";
import ProtectedAdminRoute from "../components/admin/ProtectedAdminRoute.jsx";
import HotelForm from "../components/hotel/HotelForm.jsx";
import Hero from "../components/home/Hero.jsx";
import AdminDashboard from "../components/admin/AdminDashboard.jsx";
import Hotel from "../components/hotel/Hotel.jsx";

export const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },
  {
    path: "/admin",
    element:
      <ProtectedAdminRoute>
        <AdminDashboard />
      </ProtectedAdminRoute>
    ,
    children: [
      {
        path: 'create-hotel',
        element: <HotelForm />
      },
      {
        path: "edit-hotel",
        element: <HotelForm edit={true} />
      },
      {
        path: "hotels",
        element: <Hotels />
      },
      {
        path: "hotel/:id",
        element: <Hotel />
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
  },
]);