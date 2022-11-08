import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("authenticated")) !== null
  );

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
