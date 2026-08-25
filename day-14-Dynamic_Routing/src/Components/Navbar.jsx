import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
  return (
    <div className='flex justify-between item-center p-4 bg-black'>
     <h1>Logo</h1>
     <div className='flex gap-8'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
     </div>
     <button>Login</button>
    </div>
  )
}
export default Navbar
