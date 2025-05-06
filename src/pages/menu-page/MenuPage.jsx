import React, {useState, useEffect} from 'react';
import PhoneNumber from "../../components/tooltips/phone-number/phoneNumber.jsx";
import './menuPage.css';
import axios from 'axios';
import FilteredProductList from "../../components/filtered-product-list/FilteredProductList.jsx";
import PhoneNumberToolTip from "../../components/tooltips/phone-number-tooltip/PhoneNumberToolTip.jsx";

const MenuPage = ({updateBasketCount}) => {
    const [activeButton, setActiveButton] = useState('Dessert');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCountCards, setVisibleCountCards] = useState(6);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
            axios
                .get(`https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?category=${activeButton}`)
                .then((response) => {
                    setMeals(response.data);
                    setLoading(false);
                })

                .catch((error) => {
                    setError({error: error.message});
                    setLoading(false);
                });

        }, [activeButton]
    );

    const handleSeeMoreButton = () => {
        setVisibleCountCards((prevState) => prevState + 6)
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setVisibleCountCards(6);
    };
    return (
        <>
            <main>
                <div className='mainContainer'>
                    <div className='browseInfoContainer'>
                        <div className='browseMenuTitle'>
                            Browse our menu
                        </div>
                        <div className='browseMenuDescription'>
                            Use our menu to place an order online, or
                            <PhoneNumber>
                                <PhoneNumberToolTip />
                            </PhoneNumber>
                            our store to place a pickup order. Fast and fresh food.
                        </div>
                        <div className='browseMenuButtons'>
                            <div>
                                <button
                                        onClick={() => handleButtonClick('Dessert')}
                                        className={activeButton === 'Dessert' ? 'active' : ''}
                                >
                                    Dessert
                                </button>
                            </div>
                            <div>
                                <button
                                        onClick={() => handleButtonClick('Dinner')}
                                        className={activeButton === 'Dinner' ? 'active' : ''}
                                >
                                    Dinner
                                </button>
                            </div>
                            <div>
                                <button
                                        onClick={() => handleButtonClick('Breakfast')}
                                        className={activeButton === 'Breakfast' ? 'active' : ''}
                                >
                                    Breakfast
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        {loading && <p>Please, wait! Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        <FilteredProductList
                            meals = {meals}
                            visibleCount = {visibleCountCards}
                            updateBasketCount = {updateBasketCount}
                        />
                    </div>

                    {visibleCountCards < meals.length && (
                        <div className='expandButton'>
                            <button onClick={handleSeeMoreButton}>See more</button>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default MenuPage;

