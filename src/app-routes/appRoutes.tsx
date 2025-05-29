import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import MenuPage from "../pages/menu-page/MenuPage";
import ProtectedRoute from "./ProtectedRout";
import React from "react";

interface IAppRoutesProps {
    updateBasketCount: (productId: string, newCount: number) => void;
}

const AppRoutes= ({updateBasketCount}: IAppRoutesProps) => {
    return (
        <Routes>
            <Route path='/'  element={<HomePage/>} />
            <Route path='/Menu_Page'  element={
                <ProtectedRoute>
                    <MenuPage updateBasketCount={updateBasketCount} />
                </ProtectedRoute>
            } />
            <Route path='/Login_page'  element={<LoginPage/>} />
        </Routes>
    );
};
export default AppRoutes;

