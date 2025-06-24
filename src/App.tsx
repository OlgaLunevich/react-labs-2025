import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./app-routes/appRoutes";
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthListener from "./components/auth-listener/AuthListener";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthListener>
                    <AppRoutes />
                </AuthListener>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
