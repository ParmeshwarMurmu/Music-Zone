import React from 'react'
import { WithSidebarLayoutProps } from '../Interfaces/Interfce';

import { AllRoutes } from './AllRoutes';
import { SideBar } from '../Components/SideBar/SideBar';
import { Navbar } from './Navbar';
import styled from 'styled-components';
import { useAppSelector } from '../Redux/Store/Hook';
import { themeValueFromReduxStore } from '../Redux/ThemeReducer/reducer';

export const WithSideBarLayout: React.FC<WithSidebarLayoutProps> = ({ children }) => {

  const theme = useAppSelector(themeValueFromReduxStore)
  return (
    <DIV className='flex'>
      <div  className=' w-1/6 2xl:block xl:block lg:block md:block sm:hidden mobiles-max:hidden border-r'>
        <SideBar />
      </div>



      <div className=' 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 w-full'>
        <div  className={`fixed z-50 2xl:w-10/12 xl:w-10/12 lg:w-10/12 md:w-10/12 w-full
        
        `}>
          <Navbar />
        </div>
        
        <div className={`2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10`}>

        {children}
        </div>
      </div>

    </DIV>
  );

}


const DIV = styled.div`

#shadow{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`
