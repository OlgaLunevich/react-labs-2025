import './header.css';
import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import {selectTotalCount, clearBasket} from "../../redux/slicers/basketSlice";
import {useSelector, useDispatch} from "react-redux";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { Link } from 'react-router-dom';
import {logout} from "../../redux/slicers/authSlice";



const Header = () => {
    const [activeButton, setActiveButton] = useState<string>('Home');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basketCount = useSelector(selectTotalCount);
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    const handleButtonClick = (buttonName: string, route: string) => {
        setActiveButton(buttonName);
        navigate(route);
    };

     const handleAuthButtonClick = () => {
         if (isAuthenticated) {
             dispatch(logout());
             dispatch(clearBasket());
             setActiveButton('Login');  // можно сбросить активную кнопку
             navigate('/');             // возвращаем на главную после logout
         } else {
             setActiveButton('Login');
             navigate('/Login_page');
         }
     };

    return (
        <header>
            <div className='headerContainer'>
                <div className='logo'>
                    <Link to="/">
                        <img src="src/assets/logo.svg" alt="logo" />
                    </Link>
                    <ThemeSwitcher/>
                </div>
                <div className='navBar'>
                    <div className='navButtons'>
                        <div>
                            <button
                                onClick={() => handleButtonClick('Home', '/')}
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
                                onClick={handleAuthButtonClick}
                                className={activeButton === 'Login' ? 'active' : ''}
                            >
                                {isAuthenticated ? 'Logout' : 'Login'}
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