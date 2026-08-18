import React, { useState } from "react";
import Navbars from "./Components/Navbars";
import UserCard from "./Components/UserCard";
import Form from "./Components/Form";

const App = () => {
 const [toggle,setToggle] =  useState(false)
  const [users,setUsers] =  useState([])
  return (
    <div className="p-3 h-screen flex flex-col gap-4 ">
      <Navbars setToggle={setToggle}/>
      {
        toggle?<div className="flex gap-3">
     {
      users.map((elem)=>{
        return <UserCard user={elem} setToggle={setToggle}/>
      })
     }
      </div>:
      <div className="flex justify-center h-[75%] items-center">
        <Form setUsers={setUsers} setToggle={setToggle}/>
      </div>
      }
    </div>
  );
};
export default App;
