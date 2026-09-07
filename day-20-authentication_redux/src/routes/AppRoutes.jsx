import React from 'react'
import {RouterProvider,createBrowserRouter} from "react-router"
import LoginPage from '../Pages/LoginPage'
import AuthLayout from '../Layout/AuthLayout'
import RegisterPage from '../Pages/RegisterPage'
import MainLayout from '../Layout/MainLayout'
import HomePage from '../Pages/HomePage'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children:[
                {
                path:"",
                element:<LoginPage/>
                },
                {
                    path:"register",
                    element:<RegisterPage/>
                }
            ]

        },
        {
            path:"/main",
            element:<MainLayout/>,
            children:[
                {
                    path:"",
                    element:<HomePage/>
                }
            ]
        }

    ])
  return <RouterProvider router={router} />
}

export default AppRoutes
