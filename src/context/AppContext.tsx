import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface IThemeContextProps {
    theme: Theme;
    toggleTheme : () => void;
}

const ThemeContext = createContext<IThemeContextProps>({
    theme: 'light',
    toggleTheme : () => {},
});

const AppProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const getSystemTheme = (): Theme => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    const [theme, setTheme] = useState<Theme>(() => getSystemTheme());

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, AppProvider };
