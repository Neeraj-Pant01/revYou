import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute : React.FC = () =>{
    const isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to={'/revYou/auth'} replace />
}

export default ProtectedRoute;