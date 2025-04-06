import React, { useState } from 'react';
import ProductCard from "../components/ProductCard.jsx";
import products from "../assets/productInfo(temporary folder)/products.js";
import PhoneNumberToolTip from "../toolTips/PhoneNumberToolTip.jsx";


function  MenuPage () {
    const [isHovered, setIsHovered] = useState(false);
    const [activeButton, setActiveButton] = useState('Desert');
    const handleButtonClick = (buttonName) => {
        if (activeButton !== buttonName) {
            setActiveButton(buttonName)
        }
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
                            {''}
                            <div className='toolTipWrapper'
                                 onMouseEnter={() => setIsHovered(true)}
                                 onMouseLeave={() => setIsHovered(false)}>
                                <span className='phone-ToolTip'>
                                &nbsp;phone&nbsp;
                                    {isHovered && (
                                        <div><PhoneNumberToolTip/></div>
                                    )}
                            </span>
                            </div>
                            {''}
                            our store to place a pickup order. Fast and
                            fresh food.
                        </div>
                        <div className='browseMenuButtons'>
                            <div>
                                <button
                                    onClick={() => handleButtonClick('Desert')}
                                    className={activeButton === 'Desert' ? 'active' : ''}>
                                    Desert
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleButtonClick('Dinner')}
                                    className={activeButton === 'Dinner' ? 'active' : ''}>
                                    Dinner
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleButtonClick('Breakfast')}
                                    className={activeButton === 'Breakfast' ? 'active' : ''}>
                                    Breakfast</button>
                            </div>
                        </div>
                    </div>
                    <div className='productsGridContainer'>
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))}
                    </div>
                    <div className='expandButton'>
                        <button>See more</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MenuPage