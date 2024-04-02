import React, { useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../Redux/Store/Hook'
import { arjitSingSongsValueFromReduxStore } from '../../Redux/ArjitSinghReducer/reducer'
import { useParams } from 'react-router-dom'
import { armaanAndDarshanSongValueFromReduxStore } from '../../Redux/Armaan&DarshanReducer/reducer'
import { honneySinghAndBadshahSongValueFromReduxStore } from '../../Redux/HonneySinghAndBadshahReducer/reducer'
import { playlist90SAllSongsValueFromReduxStore } from '../../Redux/90sSongReducer/reducer'

import { allMusic } from '../../Interfaces/Interfce'
import { appContent } from '../../ContextApi/ContextApi'
import { FaPlayCircle } from "react-icons/fa";
import styled from 'styled-components'


const ViewAll = () => {

    const arjitSongs = useAppSelector(arjitSingSongsValueFromReduxStore)
    const armaanAndDarshan = useAppSelector(armaanAndDarshanSongValueFromReduxStore)
    const honeyAndBadshah = useAppSelector(honneySinghAndBadshahSongValueFromReduxStore)
    const bestOf90s = useAppSelector(playlist90SAllSongsValueFromReduxStore)
    const { category } = useParams();
    console.log("category", category);
    const [data, setData] = useState<allMusic[]>([]);


    const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
    // User Authentication Token
    // const token = localStorage.getItem('musicToken')

    // const dispatch = useAppDispatch()
    // const userPlaylist = useAppSelector(userPlaylistAllPlaylistValueFromReduxStore)
    // const isLoading = useAppSelector(userPlaylistIsLoadingActionValueFromReduxStore)
    // const isError = useAppSelector(userPlaylistIsEorrActionValueFromReduxStore)



    const setTrackHandler = (clickedMusic: allMusic) => {
        setCurrentTrack(clickedMusic)
        //  onOpen()
        setShowMusicPlyer(true)

    }

    const getData = () => {
        if (category === 'arijitSingh') {
            setData(arjitSongs);
        }
        else if (category === 'armaanAndDarshan') {
            setData(armaanAndDarshan);
        }
        else if (category === 'honeySinghAndBadshah') {
            setData(honeyAndBadshah);
        }
        else if (category === 'bestOf90s') {
            setData(bestOf90s);
        }
    }

    useEffect(() => {
        getData()
    }, [category])

    console.log("data", data)

    return (
        <DIV>
            <div className=' grid 2xl:grid-cols-7 gap-y-6  border-black border-4 mt-12
          xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 mobiles-max:grid-cols-3 small:grid-cols-2
          '>
                {
                    data.map((music, index) => (
                        <div key={index} className='border-4 border-black '>

                            <div id='musicContainer' className='mb-1  p-2 hover:scale-95 '

                            >

                                <div className='relative '>
                                    <img
                                        className=''
                                        src={`data:image/jpeg;base64, ${music.picture}`}
                                        alt='Cover'
                                    />

                                    <FaPlayCircle
                                        id='playBtn'
                                        onClick={() => setTrackHandler(music)}
                                        fontSize={'50px'}
                                        className={`text-neutral-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  z-50 hover:scale-125`}
                                    />







                                    {/* </div> */}
                                    {/* </Link> */}
                                </div>


                            </div>

                            {/* <div className=' flex justify-center items-center border-4'>
                    <DeleteUserSong musicId={music.musicId} playlistName={music.playlistName}
                      _id={music._id}
                    />
                  </div> */}
                        </div>
                    ))
                }
            </div>
        </DIV>
    )
}

export default ViewAll


const DIV = styled.div`
  #playBtn{
  display: none;
}

#musicContainer:hover #playBtn {
  display: block;
}
`

