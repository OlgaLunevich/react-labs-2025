import React from 'react';
// import {Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './portectedRoutemessage.css';

interface IProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute= ({children} : IProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const loading = useSelector((state: RootState) => state.auth.loading);

    if(loading) {
        return <div className="pleaseLogin">Loading...</div>;
    }
    if(!user) {
        // return <Navigate to="/Login_page" replace />;
        // In this case necessary to create a way
        // for changing state of active button (Menu to Login) for Header during redirection.
        // return <div style={{display: "flex", justifyContent: "center", width: "100%", fontSize: "30px"}}>
        return <div className="pleaseLogin">
            Please, go to the login page.
        </div>;
    }
    return(children);
};

export default ProtectedRoute;