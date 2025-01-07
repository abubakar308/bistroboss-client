import { createBrowserRouter } from "react-router-dom";
import Layout from "../mainlayout/Layout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/contact us',
          element: <p>contact</p>
        }
      ]
    },
  ]);