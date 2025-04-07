import React, { useState } from 'react';
function Header () {
    const [activeButton, setActiveButton] = useState('Menu');


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <header >
            <div className='headerContainer'>
                <div className='logo'>
                    <img src='src/assets/logo.svg' alt='logo'/>
                </div>
                <div className='navBar'>
                    <div className='navButtons'>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Home')}
                                className={activeButton === 'Home' ? 'active' : ''}>
                            Home
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Menu')}
                                className={activeButton === 'Menu' ? 'active' : ''}>
                            Menu
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Company')}
                                className={activeButton === 'Company' ? 'active' : ''}>
                                Company
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Login')}
                                className={activeButton === 'Login' ? 'active' : ''}>
                            Login
                            </button>
                        </div>
                    </div>
                    <div className='basketContainer'>
                        <button className='basketButton'>
                            <div className='basketCounter'>
                                <div className='basketCounterValue'>0</div></div>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header