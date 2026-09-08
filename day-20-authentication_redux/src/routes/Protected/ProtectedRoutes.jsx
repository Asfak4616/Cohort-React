import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  let { user } = useSelector((Store) => Store.auth);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
