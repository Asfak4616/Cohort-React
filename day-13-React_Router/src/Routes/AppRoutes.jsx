import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Details from '../Pages/Details'
import NestedAbout from '../Pages/NestedAbout'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='details' element={<Details/>}/>
        </Route>
        <Route path='/about' element={<About/>}>
        <Route path='nested' element={<NestedAbout/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
