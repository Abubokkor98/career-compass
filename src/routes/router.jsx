import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Services from "../components/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import MyProfile from "../pages/MyProfile";
import Details from "../pages/Details";
import Clients from "../components/Clients";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Services></Services>,
        // loader: () => fetch('data.json')
      },

      {
        path: "/",
        element: <Clients></Clients>,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
    ),
    loader: async ({ params }) => {
      const res = await fetch("/data.json");
      const data = await res.json();
      const singleData = data.find((d) => d.id == params.id);
      return singleData;
    },
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
