import React, { Component } from 'react';
import ProductCard from "../../components/product-card/ProductCard.jsx";
import PhoneNumber from "../../components/tooltips/phone-number/phoneNumber.jsx";
import './menuPage.css';
import axios from 'axios';

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 'Desert',
            meals: [],
            loading: true,
            error: null,
            visibleCountCards: 6,
        };
    }

    componentDidMount() {
        axios.get("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
            .then((response) => {
                this.setState({meals: response.data, loading: false});
            })

            .catch((error) => {
                this.setState({error: error.message, loading: false});
            })
    }

    handleSeeMoreButton = () => {
        this.setState((prevState) => ({
            visibleCountCards: prevState.visibleCountCards + 6
        }));
    }


    handleButtonClick = (buttonName) => {
        if (this.state.activeButton !== buttonName) {
            this.setState({ activeButton: buttonName });
        }
    };

    render() {
        const { isHovered, activeButton, meals, loading, error } = this.state;

        return (
            <>
                <main>
                    <div className='mainContainer'>
                        <div className='browseInfoContainer'>
                            <div className='browseMenuTitle'>
                                Browse our menu
                            </div>
                            <div className='browseMenuDescription'>
                                Use our menu to place an order online, or <PhoneNumber/>
                                our store to place a pickup order. Fast and fresh food.
                            </div>
                            <div className='browseMenuButtons'>
                                <div>
                                    <button disabled
                                        onClick={() => this.handleButtonClick('Desert')}
                                        className={activeButton === 'Desert' ? 'active' : ''}
                                    >
                                        Desert
                                    </button>
                                </div>
                                <div>
                                    <button disabled
                                        onClick={() => this.handleButtonClick('Dinner')}
                                        className={activeButton === 'Dinner' ? 'active' : ''}
                                    >
                                        Dinner
                                    </button>
                                </div>
                                <div>
                                    <button disabled
                                        onClick={() => this.handleButtonClick('Breakfast')}
                                        className={activeButton === 'Breakfast' ? 'active' : ''}
                                    >
                                        Breakfast
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='productsGridContainer'>
                            {loading && <p>Please, wait! Loading...</p>}
                            {error && <p>Error: {error}</p>}
                            {!loading && !error && meals.slice(0, this.state.visibleCountCards).map((meal) => (
                                <ProductCard
                                    key={meal.id}
                                    product={{
                                        id : meal.id,
                                        name: meal.meal,
                                        price: meal.price,
                                        src: meal.img,
                                        alt: meal.meal,
                                        description: meal.instructions || "The instruction is not available",
                                    }}
                                    updateBasketCount={this.props.updateBasketCount}
                                />
                            ))}
                        </div>
                        {this.state.visibleCountCards < this.state.meals.length && (
                            <div className='expandButton'>
                                <button onClick={this.handleSeeMoreButton}>See more</button>
                            </div>
                        )}
                    </div>
                </main>
            </>
        );
    }
}

export default MenuPage;
