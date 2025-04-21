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
        };
    }

    increaseBasketCount = () => {
        this.setState((prevState) => ({
            basketCount: prevState.basketCount + 1
        }));
    };

    render() {
        const { basketCount } = this.state;
        return (
            <>
                <Header basketCount={basketCount} />
                <MenuPage increaseBasketCount={this.increaseBasketCount} />
                <Footer/>
            </>
        )
    }


}

export default App;
