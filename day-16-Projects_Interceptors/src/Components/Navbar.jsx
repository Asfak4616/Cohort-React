import React from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { useContext } from "react";
import {Auth} from "../Context/AuthContext"
import { toast } from "react-toastify";

const Navbar = () => {


  const {setLoggedInUser} = useContext(Auth)
  return (
    <div className="border-r border-gray-400 p-3 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">E-comm</h1>
        <div className="flex flex-col gap-6 ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/product"}
          >
            Product
          </NavLink>
        </div>
      </div>

      <button
        onClick={() =>{ localStorage.removeItem("loggedInUser");
          toast.warn("User Logout")
         setLoggedInUser(null)
        }}
        className="py-3 bg-red-600 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
