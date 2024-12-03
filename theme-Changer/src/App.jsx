import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Global Theme Switcher</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
