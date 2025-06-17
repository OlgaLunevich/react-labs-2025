import React from 'react';
// import {Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface IProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute= ({children} : IProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const loading = useSelector((state: RootState) => state.auth.loading);

    if(loading) {
        return <div style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "30px"}}>Loading...</div>;
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