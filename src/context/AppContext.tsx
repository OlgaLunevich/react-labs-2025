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

const LOCAL_STORAGE_KEY = 'app-theme';

const AppProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const getSystemTheme = (): Theme => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const getInitialTheme = (): Theme => {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }
        return getSystemTheme();
    };

    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
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



//Mocks
// const [theme, setTheme] = useState<Theme>(() => getSystemTheme());
// useEffect(() => {
//     const root = document.documentElement;
//     root.setAttribute('data-theme', theme);
// }, [theme]);