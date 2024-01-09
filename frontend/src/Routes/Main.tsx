import React from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'

export const Main = () => {
  return (
    <div>

      <div className='bg-yellow-400 flex'>
      
      <div className='border-4 border-rose-600 w-1/5'>
      <SideBar />
      </div>

      <div className='border-4 border-red-900 w-full'>
        <Home />
      </div>
      </div>
        
    </div>
  )
}
