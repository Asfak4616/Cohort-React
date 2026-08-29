import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../Layout/MainLayout';
import ProtectedRoutes from './ProtectedRoutes';

const MyRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children:[
            {
                path:"",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"/main",
                element:<ProtectedRoutes/>,
                children:[
                    {
                        path:"",
                        element:<MainLayout/>
                    }
                ]
            }
        ]
            
    }
    ])


  return <RouterProvider router={router}/>
}

export default MyRoutes
