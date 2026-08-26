import React, { Children } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ Children }) => {
  let isAdmin = false;
  if (!isAdmin) {
   return  <Navigate to={"/"} />;
  }

  return Children;
};

export default ProtectedRoute;
