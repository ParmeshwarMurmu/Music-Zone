import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APP_URL, USER_PLAYLIST_ENDPOINT } from '../../Endpoints/Endpoints';
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook';
import { userPlaylistAllPlaylist, userPlaylistAllPlaylistValueFromReduxStore, userPlaylistIsEorrAction, userPlaylistIsEorrActionValueFromReduxStore, userPlaylistIsLoadingAction, userPlaylistIsLoadingActionValueFromReduxStore } from '../../Redux/UserPlaylistReducer/reducer';
import { FaPlayCircle } from "react-icons/fa";
import { appContent } from '../../ContextApi/ContextApi';
import { allMusic } from '../../Interfaces/Interfce';


const UserPlaylist = () => {
    const { playlistName } = useParams();
    const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
    // User Authentication Token
    const token = localStorage.getItem('musicToken')
    
    const dispatch = useAppDispatch()
    const userPlaylist = useAppSelector(userPlaylistAllPlaylistValueFromReduxStore)
    const isLoading =  useAppSelector(userPlaylistIsLoadingActionValueFromReduxStore)
    const isError = useAppSelector(userPlaylistIsEorrActionValueFromReduxStore)
    


    const setTrackHandler = (clickedMusic: allMusic) => {
        setCurrentTrack(clickedMusic)
        //  onOpen()
        setShowMusicPlyer(true)
    
      }


    useEffect(() => {
        
        dispatch(userPlaylistIsLoadingAction(true))
        axios.get(`${APP_URL}${USER_PLAYLIST_ENDPOINT}/${playlistName}`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res);
            dispatch(userPlaylistIsLoadingAction(false))
            dispatch(userPlaylistAllPlaylist(res.data.userPlaylist))

        })
        .catch((err)=>{
            dispatch(userPlaylistIsEorrAction(true))
        })


    }, [playlistName])

    console.log('userPlaylist', userPlaylist)

    return (
        <div>
            {
                isLoading ? <div>Loading</div> : <div>
                    {
                        userPlaylist.map((music, index) => (

                            <div key={index} id='musicContainer' className='h-124 w-124 p-2 hover:scale-95 '
              
                            >
                              {/* <Link
                                id='musicCont'
                                // hover:brightness-50
                                className='m-2 p-1 hover: shadow-inner'
                                to={''}
                              > */}
              
                                <div className=''>
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
              
                                  
                                  
              
              
                                </div>
                              {/* </Link> */}
                            </div>
                          ))
                    }
                </div>
            }
        </div>
    )
}

export default UserPlaylist