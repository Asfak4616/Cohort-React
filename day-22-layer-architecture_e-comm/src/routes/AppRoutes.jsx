 import React, { useEffect } from 'react'
 import {createBrowserRouter, RouterProvider,Navigate} from "react-router"
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/Pages/LoginPage'
import RegisterPage from '../features/auth/ui/Pages/RegisterPage'
import PublicProtected from './Protected/PublicProtected'
import MainProtected from './Protected/MainProtected'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import ProductPage from '../features/products/Ui/pages/ProductPage'
import CartPage from '../features/cart/Ui/pages/CartPage'
import OrderPage from '../features/Order/ui/pages/OrderPage'
import { hydrateUser } from '../features/auth/api/authApi'
import { addUser } from '../features/auth/state/authSlice'
 const AppRoutes = () => {

useEffect(()=>{
    (async()=>{ 
try{
let response = await hydrateUser();
console.log(response)
dispatch(addUser(response))
}catch(error){
    console.log("error in hydration",error)
}
    })()
},[])


let router = createBrowserRouter([
    {
        path:"/",
        element:<PublicProtected/>,
        children:[
            {
                path:"",
                element:<AuthLayout/>,
                children:[
                    {
              index: true,
              element: <Navigate to="/login" replace />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
                    {
                        path:"register",
                        element:<RegisterPage/>
                    }
                ]
            },
            
        ]
    },
    {
        path:"/main",
        element:<MainProtected/>,
        children:[
            {
                path:"",
                element:<MainLayout/>,
                children:[
                    {
                        path:"",
                        element:<HomePage/>
                    },
                    {
                        path:"product",
                        element:<ProductPage/>
                    },
                    {
                        path:"cart",
                        element:<CartPage/>
                    },
                    {
                        path:"order",
                        element:<OrderPage/>
                    }

                ]
            }
        ]
    }
])
   return <RouterProvider router={router}/>
 }
 
 export default AppRoutes
 