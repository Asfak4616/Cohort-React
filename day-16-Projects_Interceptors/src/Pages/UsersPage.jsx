import React, { useEffect, useState } from 'react'

import UserCard from '../Components/UserCard';
import { axiosInstance } from '../Config/axiosInstance';

const UsersPage = () => {
 const [userData,setUserData] =  useState([]);
 const [isLoading,setIsLoading] = useState(true)

let getUserData = async ()=>{
  try{
  let res = await axiosInstance.get("/users")
  console.log(res)
  setUserData(res.data)
  setIsLoading(false)
  }
  catch(error){
    console.log("error in users api ",error);
  }
};
useEffect(()=>{
  getUserData();
},[])
if(isLoading) return <h1 className='text-2xl'>Loading Users</h1>

  return (
    <div className='grid grid-cols-4 gap-2'>
      {
        userData.map((val)=> <UserCard key={val.id} user={val}/>)
      }
    </div>
  )
}

export default UsersPage
