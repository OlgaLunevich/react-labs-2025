import './header.css';
import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import {selectTotalCount} from "../../redux/slicers/basketSlice";
import {useSelector} from "react-redux";


 const Header = () => {
    const [activeButton, setActiveButton] = useState<string>('Home');
    const navigate = useNavigate();
    const basketCount = useSelector(selectTotalCount);

    const handleButtonClick = (buttonName: string, route: string) => {
        setActiveButton(buttonName);
        navigate(route);
    };

    return (
        <header>
            <div className='headerContainer'>
                <div className='logo'>
                    <img src='src/assets/logo.svg' alt='logo' />
                </div>
                <div className='navBar'>
                    <div className='navButtons'>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Home','/')}
                                className={activeButton === 'Home' ? 'active' : ''}
                            >
                                Home
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Menu', '/Menu_Page')}
                                className={activeButton === 'Menu' ? 'active' : ''}
                            >
                                Menu
                            </button>
                        </div>
                        <div>
                            <button disabled
                                    onClick={() => handleButtonClick('Company', '/Company_page')}
                                    className={activeButton === 'Company' ? 'active' : ''}
                            >
                                Company
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Login','/Login_page')}
                                className={activeButton === 'Login' ? 'active' : ''}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div className='basketContainer'>
                        <button className='basketButton' onClick={() => handleButtonClick('', '/OrderPage')}>
                            <div className='basketCounter'>
                                <div className='basketCounterValue'>{basketCount}</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;