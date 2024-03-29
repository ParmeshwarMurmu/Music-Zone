import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APP_URL, USER_PLAYLIST_ENDPOINT } from '../../Endpoints/Endpoints';
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook';
import { userPlaylistAllPlaylist, userPlaylistAllPlaylistValueFromReduxStore, userPlaylistIsEorrAction, userPlaylistIsEorrActionValueFromReduxStore, userPlaylistIsLoadingAction, userPlaylistIsLoadingActionValueFromReduxStore } from '../../Redux/UserPlaylistReducer/reducer';
import { FaPlayCircle } from "react-icons/fa";
import { appContent } from '../../ContextApi/ContextApi';
import { allMusic, userData } from '../../Interfaces/Interfce';
import { SideBar } from '../SideBar/SideBar';
import { Button } from '@chakra-ui/react';
import DeleteUserSong from './DeleteUserSong';
import { getAllUserPlaylistSong } from '../../Redux/PlaylistReducer/Function';
import { Navbar } from '../../Routes/Navbar';
import styled from 'styled-components'



const UserPlaylist = () => {
  const { playlistName } = useParams();
  const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
  // User Authentication Token
  const token = localStorage.getItem('musicToken')

  const dispatch = useAppDispatch()
  const userPlaylist = useAppSelector(userPlaylistAllPlaylistValueFromReduxStore)
  const isLoading = useAppSelector(userPlaylistIsLoadingActionValueFromReduxStore)
  const isError = useAppSelector(userPlaylistIsEorrActionValueFromReduxStore)



  const setTrackHandler = (clickedMusic: allMusic) => {
    setCurrentTrack(clickedMusic)
    //  onOpen()
    setShowMusicPlyer(true)

  }


  useEffect(() => {
    dispatch(getAllUserPlaylistSong(playlistName))
  }, [playlistName])

  console.log('userPlaylist', userPlaylist)

  return (
    <DIV className='border-2 border-red-600 h-screen' >

      <div className='flex flex-row-reverse border-4'>
        <Navbar />
      </div>


      {
        isLoading ? <div>Loading</div> :
          <div className='grid 2xl:grid-cols-9 gap-y-6 overflow-y-auto bg-shades-200 h-screen
          xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 mobiles-max:grid-cols-2 mobiles-max:gap-y-2
          '>
            {
              userPlaylist.map((music, index) => (
                <div key={index} className=''>

                  <div id='musicContainer' className='mb-1  p-2 hover:scale-95 '

                  >
                    {/* <Link
                                id='musicCont'
                                // hover:brightness-50
                                className='m-2 p-1 hover: shadow-inner'
                                to={''}
                              > */}
                    {/* <div> */}
                    <div className='relative'>
                      <img
                        className=''
                        src={`data:image/jpeg;base64, ${music.musicId.picture}`}
                        alt='Cover'
                      />

                      <FaPlayCircle
                        id='playBtn'
                        onClick={() => setTrackHandler(music.musicId)}
                        fontSize={'50px'}
                        className={`text-neutral-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  z-50 hover:scale-125`}
                      />







                      {/* </div> */}
                      {/* </Link> */}
                    </div>


                  </div>

                  <div className='w-11/12 flex justify-center items-center border-4'>
                    <DeleteUserSong musicId={music.musicId} playlistName={music.playlistName}
                      _id={music._id}
                    />
                  </div>
                </div>
              ))
            }
          </div>
      }
    </DIV>
  )
}

export default UserPlaylist

const DIV = styled.div`
  #playBtn{
  display: none;
}

#musicContainer:hover #playBtn {
  display: block;
}
`
