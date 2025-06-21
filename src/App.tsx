import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./app-routes/appRoutes";
import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthListener from "./components/auth-listener/AuthListener";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthListener>
                    <Header />
                    <AppRoutes />
                    <Footer />
                </AuthListener>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
