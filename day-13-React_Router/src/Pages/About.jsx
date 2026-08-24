import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const About = () => {
let navigate = useNavigate();

  return (
    <div>
      <h1>This is About Section</h1>
     <button onClick={()=>{navigate('/about/nested')}}>Nested ko dikho</button>
      <Outlet/>
    </div>
  )
}

export default About
