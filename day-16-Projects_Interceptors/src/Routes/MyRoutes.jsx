import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Home from "../Pages/Home";
import UsersPage from "../Pages/UsersPage";
import ProductPage from "../Pages/ProductPage";

const MyRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"users",
                element:<UsersPage/>
            },
            {
                path:"product",
                element:<ProductPage/>
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyRoutes;
