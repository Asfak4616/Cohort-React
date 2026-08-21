import React, { useContext } from 'react'
import { MyShop } from '../context/My_Ecomm'

const Navbar = () => {
 let {setToggle} =  useContext(MyShop)
  return (
    <div className='flex justify-between items-center p-4 bg-black rounded'>
      <div>
        logo
      </div>
      <div className='flex gap-7 text-xl'>
        <p onClick={()=>{setToggle(false)}} className='cursor-pointer'>Home</p>
        <p onClick={()=>{setToggle(true)}} className='cursor-pointer'>Cart</p>
      </div>
  
        <button className='bg-blue-700 rounded px-3 py-2'>Login</button>
      
    </div>
  )
}

export default Navbar
