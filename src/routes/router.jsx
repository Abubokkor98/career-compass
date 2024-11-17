import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Services from "../components/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

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
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  }
]);
