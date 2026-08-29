import React, { useContext } from 'react'
import { Outlet,Navigate} from 'react-router'
import { Auth } from '../Context/AuthContext';

const ProtectedRoutes = () => {

    const{loggedInUser,registerUser} = useContext(Auth);

  
    if(!loggedInUser){
        return <Navigate to={"/"} />
    }
  return <Outlet/>
}

export default ProtectedRoutes
