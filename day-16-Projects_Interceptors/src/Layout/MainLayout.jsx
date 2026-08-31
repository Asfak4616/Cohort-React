import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='h-screen p-2  grid  grid-cols-[1fr_8fr]'>
      <Navbar/>
      <div className='h-full p-2 overflow-auto'>
        <Outlet/>
      </div>
    </div> 
  )
}
export default MainLayout;

