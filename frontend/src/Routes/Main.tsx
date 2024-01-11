import React from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'
import { Navbar } from './Navbar'

export const Main = () => {
  return (
    <div>

      <div className='flex'>
      
     

      <div className='w-full'>

        <div>
          
          <AllRoutes />
        </div>
        
      </div>
      </div>
        
    </div>
  )
}
