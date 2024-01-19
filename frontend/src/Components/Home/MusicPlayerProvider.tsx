import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { appContent } from '../../ContextApi/ContextApi';
import { APP_URL } from '../../Endpoints/Endpoints';
import { FaPlayCircle } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";

export const MusicPlayerProvider = () => {



    const { currentTrack, showMusicPlayer } = useContext(appContent);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState<number>(1);
    const [isVolumeControlVisible, setIsVolumeControlVisible] = useState<boolean>(false);

    useEffect(() => {
        if (currentTrack && audioRef.current) {
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

    return (

        <div className=''>




            {currentTrack && (<div className='flex'>

                <div className='w-24'>
                    <img src={`data:image/jpeg;base64, ${currentTrack.picture}`} alt="" />
                </div>

                <div className='w-full'>
                    
                    
                    <div className="flex justify-center items-center">
                        <span>{formatTime(currentTime)}</span>
                        <input className='w-11/12'
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                        />
                        <span>{formatTime(duration)}</span>
                    </div>



                    <div className='relative flex pl-6 justify-between'>

                        <div>
                            <p className='text-lg font-bold'>{currentTrack.title}</p>
                            <p className='text-sm'>{`${currentTrack.artist}`}</p>
                            <p className='text-sm'>{`${currentTrack.album} - ${currentTrack.releaseYear} `}</p>
                        </div>


                        <div className="w-1/6 flex absolute top-2 left-1/2 transform -translate-x-1/2 justify-center items-center pt-3">
                            <audio ref={audioRef}
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={() => setIsPlaying(false)}
                            >
                                Your browser does not support the audio tag.
                            </audio>
                            <div className="flex justify-center items-center">
                                <IoPlaySkipBackSharp fontSize={'20px'} className='mr-2' />
                                {isPlaying ? (
                                    <FaRegPauseCircle onClick={handlePlayPause} fontSize={'40px'} className='hover:text-sky-700 mr-2' />
                                ) : (
                                    <FaPlayCircle onClick={handlePlayPause} fontSize={'40px'} className='hover:text-sky-700 mr-2' />
                                )}

                                <IoPlaySkipForwardSharp fontSize={'20px'} className='mr-4' />
                            </div>



                        </div>

                        <div className='flex justify-center items-center pr-5'>
                        <FaVolumeLow
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
                        {/* {isVolumeControlVisible && (
                                   
                                )} */}
                    </div>

                    </div>
                    

                    

                </div>



            </div>


            )}
        </div>

    )
}
