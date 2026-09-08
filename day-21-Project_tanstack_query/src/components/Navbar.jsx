import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 bg-black'>
      <h1>SkyDart</h1>
      <div className=' flex gap-8'>
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/shop"}>Shop</NavLink>
        <NavLink to={"/main/about"}>About</NavLink>
      </div>
      <div className='flex gap-6 items-center'>
        <h1>Hey,dev...</h1>
        <button>Cart</button>
      </div>
    </div>
  )
}

export default Navbar
