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
import { Heading, useDisclosure } from '@chakra-ui/react'
import styled from 'styled-components'


export const Home = () => {

  const { disclosure, setShowMusicPlyer } = useContext(appContent);
  const { isOpen, onOpen } = disclosure;
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const { currentTrack, setCurrentTrack } = useContext(appContent)
  const [isHovered, setIsHovered] = useState<boolean>(false);
  

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

  const setTrackHandler = (clickedMusic: allMusic) => {
    setCurrentTrack(clickedMusic)
    //  onOpen()
    setShowMusicPlyer(true)

  }

  console.log('Current Track', currentTrack)

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };



  return (
    <DIV className=''>
      {/* <div className='w-1/5'>
        <SideBar />
      </div> */}

      <div className='w-full flex flex-row-reverse'>
        <Navbar />

      </div>

      <div className='flex'>

        {musicList.map((music) => (
          <Link id='musicCont' className='m-2 relative shadow-2xl p-1 hover:brightness-50' to={''} key={music._id.toString()}>
            {/* <h3>{music.title}</h3>
            <p>Artist: {music.artist}</p>
            <p>Album: {music.album}</p> */}
            <Heading as='h6' size='sm'>
              <h3>{truncateString(music.title, 13)}</h3>
            </Heading>
            <p><span>Artist:</span> {truncateString(music.artist, 10)}</p>
            <p><span>Album: </span>{truncateString(music.album, 10)}</p>
            <div className='flex'>

              <img className='w-32' src={`data:image/jpeg;base64, ${music.picture}`} alt="Cover" />
            </div>
            {/* <img src={`${APP_URL}/home/music/cover/${music.filename}`} alt="Cover" /> */}
            {/* <audio controls>
              <source src={`${APP_URL}/home/music/${music.filename}`} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio> */}
            
            <FaPlayCircle id='playBtn'  
            onClick={()=> setTrackHandler(music)} 
            fontSize={'30px'} 
            className={`text-shades-100 ${isHovered ? 'visible' : 'hidden'} hover:text-sky-700 absolute bottom-0 right-0`}
            // className='text-shades-100 hidden hover:text-sky-700 absolute  bottom-0 right-0'
             />
          </Link>
        ))}


      </div>


    </DIV>
  )
}


const DIV = styled.div`
  
`