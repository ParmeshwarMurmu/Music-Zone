import React, { useContext } from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'
import { Navbar } from './Navbar'
import { MusicPlayerProvider } from '../Components/Home/MusicPlayerProvider'
import { appContent } from '../ContextApi/ContextApi'
import { Footer } from '../Components/Footer/Footer'


export const Main = () => {

  const { showMusicPlayer } = useContext(appContent)
  console.log("showMusicPLayer", showMusicPlayer);


  return (
    <div className='h-screen relative'>



      {/* <div className='flex'>


        
        <div className='w-1/6'>
          <SideBar />
        </div>


        
        <div className='w-4/5'>

          <div>

            <AllRoutes />
          </div>

        </div>
      </div> */}

      <div>

        <AllRoutes />
      </div>

      

      {
        showMusicPlayer && <div className='bg-neutral-silver fixed bottom-0 left-0 right-0 shadow-2xl opacity-100 p-2 '>
          <MusicPlayerProvider />
        </div>
      }

<div className='border-4 mt-6 '>
        <Footer />
      </div>

      


    </div>
  )
}
