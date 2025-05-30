import React, {useState} from 'react';
import PhoneNumber from "../../components/tooltips/phone-number/phoneNumber";
import './menuPage.css';
import FilteredProductList from "../../components/filtered-product-list/FilteredProductList";
import PhoneNumberToolTip from "../../components/tooltips/phone-number-tooltip/PhoneNumberToolTip";
import useFetch from "../../components/custom-hooks";
import {Product} from "../../shared/types/product.type";

interface IMenuPageProps {
    updateBasketCount: (productId: string, newCount: number) => void;
}



const MenuPage = ({updateBasketCount}: IMenuPageProps) => {
    const [activeButton, setActiveButton] = useState <string>('Dessert');
    const [visibleCountCards, setVisibleCountCards] = useState<number>(6);

    const url = `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?category=${activeButton}`;
    const { data: meals = [], loading, error } = useFetch<Product>({url});

    const handleSeeMoreButton = () => {
        setVisibleCountCards((prevState) => prevState + 6)
    };

    const handleButtonClick = (buttonName: string) => {
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

