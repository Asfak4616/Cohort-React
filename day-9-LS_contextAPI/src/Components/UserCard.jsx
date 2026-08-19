import React from "react";

const UserCard = ({ user,setToggle,deleteUser,ind ,setUpdatedData}) => {
  return (
    <div className="p-4 border border-white bg-black rounded flex flex-col gap-2">
      <div className="h-35 w-40">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button onClick={()=>{
          setUpdatedData(user)
          setToggle((prev)!=prev)
        }} className=" bg-amber-600 text-white rounded py-2 px-3">
          Update
        </button>
        <button onClick={()=>{deleteUser(user.id)}} className="bg-red-500 text-white rounded p-2 px-3">
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserCard;
