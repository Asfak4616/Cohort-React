import React from "react";

const UserCard = ({user}) => {
  return (
    <div className=" flex flex-col gap-4 p-4 border-gray-500 border rounded bg-white">
      <div className="w-40 h-40 rounded overflow-hidden">
        <img className="h-full w-full" src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>

      </div>
      <button>Delete</button>
    </div>
  );
};

export default UserCard;
