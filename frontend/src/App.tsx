import React from 'react';
import { Main } from './Routes/Main';
import { SignUp } from './Routes/SignUp';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';
import { Link } from 'react-router-dom';
import { DiffRoutes } from './Routes/DiffRoutes';
import { useAppSelector } from './Redux/Store/Hook';
import { themeValueFromReduxStore } from './Redux/ThemeReducer/reducer';
// 
// bg-neutral-lightThemeBackground bg-neutral-darkThemeBackground
//  #203A43 #2C5364 #2C5364
function App() {
  const theme = useAppSelector(themeValueFromReduxStore)
  return (
    <div className={`box-border ${theme === 'dark' ? 'bg-gradient-to-r from-neutral-try3 to-neutral-try5' : 'bg-gradient-to-r from-neutral-try2 to-neutral-try'}`}>
      <Main />
    
    </div>
  );
}

export default App;
