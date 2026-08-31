import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-r border-gray-400 flex flex-col gap-7">
      <h1 className="text-2xl font-semibold">E-comm</h1>
      <div className="flex flex-col gap-6 ml-5">
        <NavLink
          className={({ isActive }) => {
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500";
          }}
          to={"/main"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500";
          }}
          to={"/main/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            isActive
              ? "font-semibold text-red-500 border-b border-gray-500"
              : "text-black border-b border-gray-500";
          }}
          to={"/main/product"}
        >
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
