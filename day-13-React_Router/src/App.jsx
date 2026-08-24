import React from 'react'
import Navbar from './Components/Navbar'
import AppRoutes from './Routes/AppRoutes'


const App = () => {
  return (
    <div className='h-screen p-2'>
     <Navbar/>
     <AppRoutes/>
    </div>
  )
}

export default App
