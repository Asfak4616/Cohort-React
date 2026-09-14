import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

  let {isAuthenticated,user,isLoading} = useSelector((Store)=>Store.auth)
  
  if(isLoading) return <h1>Loading state...</h1>
  
  if(!user){
    return <Navigate to={"/"}/>
  }
  return <Outlet/>
}

export default MainProtected
