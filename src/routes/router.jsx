import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Services from "../components/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Services></Services>,
            loader: () => fetch('data.json')
        }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: '/auth/login',
            element: <Login></Login>,
          },
          {
            path: '/auth/register',
            element: <Register></Register>,
          }
    ]
  }
]);
