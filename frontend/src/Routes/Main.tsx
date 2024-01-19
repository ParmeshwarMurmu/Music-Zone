import React, { useContext } from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'
import { Navbar } from './Navbar'
import { MusicPlayerProvider } from '../Components/Home/MusicPlayerProvider'
import { appContent } from '../ContextApi/ContextApi'


export const Main = () => {

  const { showMusicPlayer } = useContext(appContent)
  console.log("showMusicPLayer", showMusicPlayer);
  

  return (
    <div className='h-screen relative'>



      <div className='flex'>


        {/* Side Bar */}
        <div className='w-1/6'>
          <SideBar />
        </div>


        {/* All Routes */}
        <div className='w-4/5'>

          <div>

            <AllRoutes />
          </div>

        </div>
      </div>

      {
        showMusicPlayer && <div className='bg-gray-300  absolute bottom-0 left-0 right-0'>
          <MusicPlayerProvider />
        </div>
      }

    </div>
  )
}
