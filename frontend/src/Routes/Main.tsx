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
    <div className='h-screen relative bg-neutral-background'>





      <div>

        <AllRoutes />
      </div>



      {
        showMusicPlayer && <div className='fixed bottom-0 left-0 right-0 shadow-2xl opacity-100 p-2 '>
          <MusicPlayerProvider />
        </div>
      }

      <div className='w-full  pt-12'>
        <Footer />
      </div>




    </div>
  )
}
