import React from 'react';
import { Main } from './Routes/Main';
import { SignUp } from './Routes/SignUp';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';
import { Link } from 'react-router-dom';
import { DiffRoutes } from './Routes/DiffRoutes';
import { useAppSelector } from './Redux/Store/Hook';
import { themeValueFromReduxStore } from './Redux/ThemeReducer/reducer';

function App() {
  const theme = useAppSelector(themeValueFromReduxStore)
  return (
    <div className={`box-border ${theme === 'dark' ? 'bg-neutral-darkThemeBackground' : 'bg-neutral-lightThemeBackground'}`}>
      <Main />
    
    </div>
  );
}

export default App;
