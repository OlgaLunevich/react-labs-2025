import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./app-routes/appRoutes.jsx";
import React from 'react';
import {useState, useCallback} from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {AuthProvider} from "./context/AuthContex.jsx";




const App = () => {
    const [basketCount, setBasketCount] = useState(0);
    const [basketMap, setBasketMap] = useState({});

    const updateBasketCount = useCallback((productId, newCount) => {
            setBasketMap(prevMap => {
                const prevCount = basketMap[productId] || 0;
                const updatedMap = {
                    ...prevMap,
                    [productId]: newCount
                };

                const newTotalCount = Object.entries(updatedMap).reduce(
                    (total, [_, count]) => total + count,
                    0
                );

                setBasketCount(newTotalCount);
                return updatedMap;
            });
        }, []
    );

    return (
        <BrowserRouter>
            <AuthProvider>
                <Header basketCount={basketCount} />
                <AppRoutes updateBasketCount={updateBasketCount} />
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    )
};
export default App;
