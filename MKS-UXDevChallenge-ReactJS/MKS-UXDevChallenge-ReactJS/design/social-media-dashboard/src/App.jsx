import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Dashboard toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
