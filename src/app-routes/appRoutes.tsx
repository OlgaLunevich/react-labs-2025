import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import MenuPage from "../pages/menu-page/MenuPage";
import OrderPage from "../pages/order-page/OrderPage";
import ProtectedRoute from "./ProtectedRout";
import React from "react";

const AppRoutes= () => {
    return (
        <Routes>
            <Route path='/'  element={<HomePage/>} />
            <Route path='/Menu_Page'  element={
                <ProtectedRoute>
                    <MenuPage />
                </ProtectedRoute>
            } />
            <Route path='/Login_page'  element={<LoginPage/>} />
            <Route path='/OrderPage' element={<OrderPage/>} />
        </Routes>
    );
};
export default AppRoutes;

