import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router";
import { toast } from "react-toastify";
// import LoginPage from "../Pages/LoginPage";
// import AuthLayout from "../Layout/AuthLayout";
// import RegisterPage from "../Pages/RegisterPage";
// import MainLayout from "../Layout/MainLayout";
// import HomePage from "../Pages/HomePage";
// import { addUser } from "../features/AuthSlice";
// import PublicRoutes from "./Protected/PublicRoutes";
// import ProtectedRoutes from "./Protected/ProtectedRoutes";
// import ShopPage from "../Pages/ShopPage";
// import AboutPage from "../Pages/AboutPage";
import { lazy } from "react";

const LoginPage = lazy(() => import("../Pages/LoginPage"));
const AuthLayout = lazy(() => import("../Layout/AuthLayout"));
const RegisterPage = lazy(() => import("../Pages/RegisterPage"));
const MainLayout = lazy(() => import("../Layout/MainLayout"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const PublicRoutes = lazy(() => import("./Protected/PublicRoutes"));
const ProtectedRoutes = lazy(() => import("./Protected/ProtectedRoutes"));
const ShopPage = lazy(() => import("../Pages/ShopPage"));
const AboutPage = lazy(() => import("../Pages/AboutPage"));

import { addUser } from "../features/AuthSlice";

const AppRoutes = () => {

  let dispatch = useDispatch();

  const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);




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
              index: true,
              element: <Navigate to="/login" replace />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
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
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path:"shop",
              element:<ShopPage/>
            },
            {
              path:"about",
              element:<AboutPage/>
            }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
