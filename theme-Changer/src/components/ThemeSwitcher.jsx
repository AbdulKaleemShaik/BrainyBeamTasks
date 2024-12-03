import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import "./ThemeSwitcher.css"
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;
