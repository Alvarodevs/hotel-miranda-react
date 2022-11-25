import { Outlet, Navigate } from "react-router";
import LoginContext from "../store/LoginContext";
import { useContext } from "react";

const PrivateRoutes = () => {
	const [state] = useContext(LoginContext);
   return state.isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;