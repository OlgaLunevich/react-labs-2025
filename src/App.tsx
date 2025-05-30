import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./app-routes/appRoutes";
import React from 'react';
import {useState, useCallback} from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {AuthProvider} from "./context/AuthContex";
import { Product } from "./shared/types/product.type";

type BasketMap = Record<Product['id'], number>;

const App = () => {
    const [basketCount, setBasketCount] = useState<number>(0);
    const [basketMap, setBasketMap] = useState<BasketMap>({});


    const updateBasketCount = useCallback((productId: Product['id'], newCount: number) => {
        setBasketMap(prevMap => {
            const updatedMap = {
                ...prevMap,
                [productId]: newCount
            };

            const newTotalCount = (Object.values(updatedMap)as number[]).reduce(
                (total, count) => total + count,
                0
            );

            setBasketCount(newTotalCount);
            return updatedMap;
        });
    }, []);

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
