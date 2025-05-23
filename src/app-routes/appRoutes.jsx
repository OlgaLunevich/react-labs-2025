import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/home-page/HomePage.jsx";
import LoginPage from "../pages/login-page/LoginPage.jsx";
import MenuPage from "../pages/menu-page/MenuPage.jsx";
import ProtectedRoute from "./ProtectedRout.jsx";

const AppRoutes = ({updateBasketCount}) => {
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

