import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-400 rounded gap-5 justify-between py-4 px-8">
      <h1>logo</h1>
      <div className="flex items-center gap-10">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-800" : "text-white"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-800" : "text-white"
          }
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-800" : "text-white"
          }
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <NavLink className={({ isActive }) =>
            isActive ? "text-yellow-800" : "text-white"
          } to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>
        <NavLink  className={({ isActive }) =>
            isActive ? "text-yellow-800" : "text-white"
          } to={"/main/orders"}>
          <Box />
        </NavLink>
        <button className="px-3 py-2 cursor-pointer text-white bg-orange-500 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
