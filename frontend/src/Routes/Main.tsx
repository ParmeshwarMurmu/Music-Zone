import React from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'
import { Navbar } from './Navbar'
import { MusicPlayerProvider } from '../Components/Home/MusicPlayerProvider'

export const Main = () => {
  return (
    <div className='bg-red-300 h-screen relative'>



      <div className='flex'>

        
        {/* Side Bar */}
        <div className='w-1/5'>
          <SideBar />
        </div>


       {/* All Routes */}
        <div className='w-full'>

          <div>

            <AllRoutes />
          </div>

        </div>
      </div>

      <div  className='bg-gray-300 h-16 absolute bottom-0 left-0 right-0'>
        <MusicPlayerProvider />
      </div>

    </div>
  )
}
