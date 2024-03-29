import React from 'react'
import { WithSidebarLayoutProps } from '../Interfaces/Interfce';

import { AllRoutes } from './AllRoutes';
import { SideBar } from '../Components/SideBar/SideBar';

export const WithSideBarLayout : React.FC<WithSidebarLayoutProps> = ({ children }) => {
    return (
      <div className='flex'>
        <div className='w-1/6 2xl:block xl:block lg:block md:block sm:hidden'>
          <SideBar />
        </div>

        <div className='w-4/5'>{children}</div>
      </div>
    );
  
}
