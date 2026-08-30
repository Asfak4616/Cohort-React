import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='border-r border-gray-400'>
      <h1>E-comm</h1>
      <div className='flex flex-col gap-10'>
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/users"}>Users</NavLink>
        <NavLink to={"/main/product"}>Product</NavLink>
      </div>
    </div>
  )
}

export default Navbar
