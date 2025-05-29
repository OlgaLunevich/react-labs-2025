import React from 'react';
// import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContex";

interface IProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute= ({children} : IProtectedRouteProps) => {
    const {user, loading} = useAuth();

    if(loading) {
        return <div>Loading...</div>;
    }
    if(!user) {
        // return <Navigate to="/Login_page" replace />;
        // In this case necessary to create a way
        // for changing state of active button (Menu to Login) for Header during redirection.
        return <div style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "30px"}}>
            Please, go to the login page.
        </div>;
    }
    return(children);
};

export default ProtectedRoute;