import './App.css'
import MenuPage from "./pages/menu-page/MenuPage.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import React, { Component } from 'react';
import {useState, useCallback} from "react";
import HomePage from "./pages/home-page/HomePage.jsx";


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
        <>
            <Header basketCount={basketCount} />
            {/*<MenuPage updateBasketCount={updateBasketCount} />*/}
            <HomePage/>
            <Footer />
        </>
    )
}
export default App;

