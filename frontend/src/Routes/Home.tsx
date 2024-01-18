import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { SideBar } from '../Components/SideBar/SideBar'
import axios from 'axios'
import { APP_URL } from '../Endpoints/Endpoints'
import { allMusic } from '../Interfaces/Interfce'
import { appContent } from '../ContextApi/ContextApi'
import { FaPlayCircle } from "react-icons/fa";
import { useDisclosure } from '@chakra-ui/react'
export const Home = () => {
  
  const { disclosure, setShowMusicPlyer } = useContext(appContent);
  const { isOpen, onOpen } = disclosure;
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const {currentTrack, setCurrentTrack} = useContext(appContent)

  useEffect(() => {
    axios.get(`${APP_URL}/home/allMusic`)
      .then((res) => {
        console.log(res.data);
        setMusicList(res.data.allMusic)

      })
      .catch((err) => {
        console.log(err);

      })


  }, [])

  console.log("musicList", musicList);

  const setTrackHandler = (clickedMusic: allMusic)=>{
     setCurrentTrack(clickedMusic)
    //  onOpen()
     setShowMusicPlyer(true)
     
  }

  console.log('Current Track',currentTrack)
  

  
  return (
    <div className='flex'>
      {/* <div className='w-1/5'>
        <SideBar />
      </div> */}

      <div className='w-full flex flex-row-reverse'>
        <Navbar />Fa

        { musicList.map((music) => (
          <Link className='border-2 border-gray-950' to={''} onClick={() => setTrackHandler(music)}  key={music._id.toString()}>
            <h3>{music.title}</h3>
            <p>Artist: {music.artist}</p>
            <p>Album: {music.album}</p>
            <img className='h-28' src={`data:image/jpeg;base64, ${music.picture}`} alt="Cover" />
            {/* <img src={`${APP_URL}/home/music/cover/${music.filename}`} alt="Cover" /> */}
            {/* <audio controls>
              <source src={`${APP_URL}/home/music/${music.filename}`} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio> */}
            <FaPlayCircle onClick={()=> setTrackHandler(music)} fontSize={'30px'} className='hover:text-sky-700' />
          </Link>
        ))}


      </div>


    </div>
  )
}
