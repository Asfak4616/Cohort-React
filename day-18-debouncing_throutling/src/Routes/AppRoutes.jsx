import React, { Children, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

import App from "../App";
import { getUsers } from "../Api/UserApi";

let About = lazy(() => import("../Pages/About"));
let Contact = lazy(() => import("../Pages/Contact"));


const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
         
          element: (
          <Suspense fallback={<h1>Loading About..</h1> }>
            <About/>
          </Suspense>
          ),
        loader:getUsers,
        },
        {
          path: "contact",
           element: <Suspense fallback={<h1>Loading Contact..</h1> }>
            <Contact/>
          </Suspense>
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
