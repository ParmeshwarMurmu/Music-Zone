import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { appContent } from '../../ContextApi/ContextApi';
import { APP_URL, USER_ADD_TO_PLAYLIST_ENDPOINT } from '../../Endpoints/Endpoints';
import { FaPlayCircle } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineRepeat } from "react-icons/md";
import { MdOutlineRepeatOne } from "react-icons/md";
import { CreatePlaylist } from '../SideBar/CreatePlaylist';
import { Button, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useAppSelector } from '../../Redux/Store/Hook';
import { usersPlaylistValueFromReduxStore } from '../../Redux/PlaylistReducer/reducer';
import { isAuthValueFromReduxStore } from '../../Redux/isAuthReducer/reducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MoreInfoOFSomg from './MoreInfoOFSomg';
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer';

export const MusicPlayerProvider = () => {



    const { currentTrack, showMusicPlayer, setCurrentTrack, setShowMusicPlyer } = useContext(appContent);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState<number>(1);
    const [isVolumeControlVisible, setIsVolumeControlVisible] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<boolean>(false);
    const toast = useToast();
    const navigate = useNavigate();
    const [currentTrackerLoading, setCurrentTrackerLoading] = useState<boolean>(false)
    // Getting  user playlist from redux store
    const userPlaylist = useAppSelector(usersPlaylistValueFromReduxStore)
    const theme = useAppSelector(themeValueFromReduxStore)

    const { createPlaylist, setCreatePlaylist } = useContext(appContent)
    const isAuth = useAppSelector(isAuthValueFromReduxStore)

    // User Authentication Token
    const token = localStorage.getItem('musicToken')

    // Function to handle create Playlist

    const createNewPlaylist = () => {
        if (isAuth) {
            setCreatePlaylist(true)
        }
        else {
            toast({
                title: `Please Login`,
                position: 'top-right',
                status: 'warning',
                isClosable: true,
                duration: 2000,
            })
            navigate('/login')
        }

    }


    useEffect(() => {
        
        if (currentTrack && audioRef.current) {
            // setCurrentTrackerLoading(true)
            audioRef.current.src = `${APP_URL}/home/singleMusic/${currentTrack.filename}`;

            audioRef.current.load(); // Reload the audio element
           
            audioRef.current.play();
            setIsPlaying(true); // Pause the audio when changing the track
        }
    }, [currentTrack]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };


    const formatTime = (seconds: number): string => {
        if (isNaN(seconds)) {
            return '0:00';
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const seekTime = Number(e.target.value);
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };


    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newVolume = Number(e.target.value);
            audioRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };


    const handleVolumeIconMouseEnter = () => {
        setIsVolumeControlVisible(true);
    };

    const handleVolumeIconMouseLeave = () => {
        setIsVolumeControlVisible(false);
    };

    const closeMusicPlayer = () => {

        if (audioRef.current) {
            try {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            } catch (error) {
                console.error("Error while closing music player:", error);
            }
        }

        setIsPlaying(false)
        setCurrentTrack(null)
        setShowMusicPlyer(false)

    }

    useEffect(() => {
        // ... (other useEffect logic)

        const handleEnded = () => {
            if (audioRef.current) {
                if (repeat) {
                    // If repeat is true, reset current time and play again
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                    setIsPlaying(true)
                } else {
                    // If repeat is false, stop playing
                    setIsPlaying(false);
                }
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('ended', handleEnded);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', handleEnded);
            }
        };
    }, [currentTrack, repeat]);


    // Add to playlist handler

    const addToPlaylistHandler = (playlistName: string) => {
        console.log("***");

        console.log(playlistName, "playlist Name");
        console.log(currentTrack);

        axios.post(`${APP_URL}${USER_ADD_TO_PLAYLIST_ENDPOINT}/${playlistName}`, { _id: currentTrack?._id }, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res);
                toast({
                    title: `${res.data.message}`,
                    position: 'top-right',
                    status: 'success',
                    isClosable: true,
                    duration: 2000,
                })
            })
            .catch((err) => {
                console.log(err);
                toast({
                    title: `${err.data.message}`,
                    position: 'top-right',
                    status: 'error',
                    isClosable: true,
                    duration: 2000,
                })

            })


    }

    // console.log(currentTrack);
    

    return (

        <div className='w-full mobiles-max:h-51 mobiles-max:pt-4 '>



            {
                currentTrack && <MoreInfoOFSomg currentTrackInfo={currentTrack}  />
            }

            {currentTrack && (<div className='flex relative '>


                {/* Music Thumbnail */}



                <div className='w-24 small:hidden sm:hidden md:block 2xl:block lg:block xl:block mobiles-max:hidden'>
                    <img src={`data:image/jpeg;base64, ${currentTrack.picture}`} alt="" />
                </div>

                {/* Music Details */}
                <div className='w-full '>


                    {/* Music Duration */}
                    <div className="flex justify-center items-center">
                        <span className={`text-14 font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{formatTime(currentTime)}</span>
                        <input className='w-11/12 h-0.5 text-neutral-info mr-1 ml-1'
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                        />
                        <span className={`text-14 font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{formatTime(duration)}</span>
                    </div>


                    {/* Music Details title, artists etc */}

                    <div className={`relative flex  justify-between small:pl-0 sm:pl-0 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6`}>

                        <div className={`small:hidden mobiles-max:hidden`}>
                            <p className={`text-xl font-semibold  ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}
                            
                            >{currentTrack.title}</p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}
                            >{`${currentTrack.artist}`}</p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>
                                {`${currentTrack.album} - ${currentTrack.releaseYear} `}</p>
                        </div>

{/* cccc */}
                        <div className={`w-1/6 flex absolute top-2 left-1/2 transform -translate-x-1/2 justify-center items-center pt-3 mobiles-max:top-21 `}>
                            <audio ref={audioRef}
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={() => setIsPlaying(false)}
                            >
                                Your browser does not support the audio tag.
                            </audio>

                            {/* Music Pause next prevoius Btns */}
                            <div className={`flex justify-center items-center`}>

                                {
                                    repeat ? (
                                        <MdOutlineRepeatOne fontSize={'20px'} className='mr-2 hover:cursor-pointer'
                                            onClick={() => { setRepeat(false) }}
                                            color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                        />
                                    ) : (
                                        <MdOutlineRepeat fontSize={'20px'} className='mr-2 hover:cursor-pointer'
                                            onClick={() => { setRepeat(true) }}
                                            color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                        />
                                    )
                                }

                                <IoPlaySkipBackSharp fontSize={'20px'} className='mr-2'
                                color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                 />
                                {isPlaying ? (
                                    <FaRegPauseCircle 
                                    color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                    onClick={handlePlayPause} 
                                    fontSize={'40px'} 
                                    className={`hover:text-blue-500 mr-2 cursor-pointer `}
                                     />                                ) : (
                                    <FaPlayCircle 
                                    color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                    onClick={handlePlayPause} fontSize={'40px'} 
                                    className={`hover:text-blue-500 mr-2 cursor-pointer `}
                                     />
                                )}

                                <IoPlaySkipForwardSharp
                                color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                 fontSize={'20px'} className='mr-4' />

                                <div>
                                    <Menu>
                                        <MenuButton as={Button} variant={'none'} >
                                            <BsThreeDotsVertical color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`} />
                                        </MenuButton>
                                        <MenuList className={'z-50'}>
                                            {
                                                userPlaylist.length > 0 && <div>
                                                    {
                                                        userPlaylist.map((el) => (
                                                            <MenuItem onClick={() => addToPlaylistHandler(el.playlistName)}>Add To {el.playlistName}</MenuItem>
                                                        ))
                                                    }
                                                </div>
                                            }

                                            <MenuItem onClick={createNewPlaylist}>
                                                Create Playlist
                                            </MenuItem>


                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>



                        </div>

                        {/* Music Volume Controller */}
                        {/* <div className='flex justify-center items-center pr-5 mobiles-max:flex-col-reverse'>
                            <FaVolumeLow
                             color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                                className='mr-4'
                                fontSize={'20px'}

                            />

                            <input
                                className='border-4'
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={handleVolumeChange}
                            />

                        </div> */}

                    </div>

                </div>


                {/* Cross Button */}

                <div className='absolute top-0 right-0 mobiles-max:-top-5 '>
                    <RxCross2 className={`hover:cursor-pointer  `}
                     color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                        fontSize={'20px'}
                        onClick={closeMusicPlayer}
                    />
                </div>



            </div>


            )}
        </div>

    )
}
