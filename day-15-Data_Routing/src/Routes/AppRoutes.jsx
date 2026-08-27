import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'

const AppRoutes = () => {
let router =createBrowserRouter([
    {
     path:"/",
     element:<Home/>
    },
    {
        path:"/about",
     element:<About/>
    },
    {
        path:"/services",
     element:<Services/>
    },
])
  return <RouterProvider router={router} />
}

export default AppRoutes
