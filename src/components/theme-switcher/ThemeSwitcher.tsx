import React, { useContext } from 'react';
import {ThemeContext} from "../../context/AppContext";
import './themeSwitcher.css'

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className='themSwitcher' onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;

