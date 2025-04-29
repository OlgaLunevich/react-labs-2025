import './App.css'
import MenuPage from "./pages/menu-page/MenuPage.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basketCount: 0,
            basketMap: {},
        };
    }

    updateBasketCount = (productId, newCount) => {
        this.setState((prevState) => {
            const prevCount = prevState.basketMap[productId] || 0;
            const newBasketMap = {
                ...prevState.basketMap,
                [productId]: newCount
            };

            return {
                basketMap: newBasketMap,
                basketCount: prevState.basketCount - prevCount + newCount
            };
        });
    };

    render() {
        const { basketCount } = this.state;
        return (
            <>
                <Header basketCount={basketCount} />
                <MenuPage updateBasketCount={this.updateBasketCount} />
                <Footer/>
            </>
        )
    }
}

export default App;
