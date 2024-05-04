import React, { useContext } from 'react'
import { SideBar } from '../Components/SideBar/SideBar'
import { Home } from './Home'
import { AllRoutes } from './AllRoutes'
import { Navbar } from './Navbar'
import { MusicPlayerProvider } from '../Components/Home/MusicPlayerProvider'
import { appContent } from '../ContextApi/ContextApi'
import { Footer } from '../Components/Footer/Footer'
import { useAppSelector } from '../Redux/Store/Hook'
import { themeValueFromReduxStore } from '../Redux/ThemeReducer/reducer'


export const Main = () => {

  const { showMusicPlayer } = useContext(appContent)
  console.log("showMusicPLayer", showMusicPlayer);
  const theme = useAppSelector(themeValueFromReduxStore)


  return (
    <div className='relative '>





      <div>

        <AllRoutes />
      </div>



      {
        showMusicPlayer && <div className={`fixed bottom-0 left-0 right-0 shadow-2xl shadow-green-700 opacity-100 p-2  z-50  ${theme === 'dark' ? 'bg-gradient-to-r from-neutral-showMusic1 via-neutral-showMusic2 to-neutral-showMusic3' : 'bg-neutral-lightThemeBackground'}`}>
          <MusicPlayerProvider />
        </div>
      }

      <div className= {`w-full pb-12
      
        `}>
        <Footer />
      </div>




    </div>
  )
}
