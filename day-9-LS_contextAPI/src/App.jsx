import React, { useState } from "react";
import Navbars from "./Components/Navbars";
import UserCard from "./Components/UserCard";
import Form from "./Components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
 const [updatedData,setUpdatedData] =  useState(null)


  const deleteUser = (id) => {
   let filterUser = users.filter((val,index) =>{
    return index !== id;
   })
   console.log(filterUser)
   setUsers(filterUser);
   localStorage.setItem("users",JSON.stringify(filterUser))
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4 ">
      <Navbars setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-3">
          {users.map((elem) => {
            return (
              <UserCard
              setUpdatedData={setUpdatedData}
                deleteUser={deleteUser}
                key={elem.id}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[75%] items-center">
          <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};
export default App;
