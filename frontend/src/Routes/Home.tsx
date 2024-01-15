import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { SideBar } from '../Components/SideBar/SideBar'
import axios from 'axios'
import { APP_URL } from '../Endpoints/Endpoints'
import { allMusic } from '../Interfaces/Interfce'

export const Home = () => {

  const [musicList, setMusicList] = useState<allMusic[]>([])

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
  

  
  return (
    <div className='flex'>
      <div className='w-1/5'>
        <SideBar />
      </div>

      <div className='w-full flex flex-row-reverse'>
        <Navbar />


        { musicList.map((music) => (
          <div  key={music._id.toString()}>
            <h3>{music.title}</h3>
            <p>Artist: {music.artist}</p>
            <p>Album: {music.album}</p>
            <img src={`data:image/jpeg;base64, ${music.picture}`} alt="Cover" />
            {/* <img src={`${APP_URL}/home/music/cover/${music.filename}`} alt="Cover" /> */}
            <audio controls>
              <source src={`${APP_URL}/home/music/${music.filename}`} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}


      </div>


    </div>
  )
}
