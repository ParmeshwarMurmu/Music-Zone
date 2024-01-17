import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { appContent } from '../../ContextApi/ContextApi';
import { APP_URL } from '../../Endpoints/Endpoints';

export const MusicPlayerProvider = () => {

    // const { currentTrack, showMusicPlayer } = useContext(appContent)
    // let [audioSrc, setAudioSrc] = useState<File>()
    // const [audioKey, setAudioKey] = useState<number>(0);
    // const audioRef = useRef<HTMLAudioElement>(null);


    // useEffect(() => {

    //     console.log("**");
    //     if (currentTrack && audioRef.current) {
    //         audioRef.current.src = `${APP_URL}/home/singleMusic/${currentTrack.filename}`;
    //         audioRef.current.load(); // Reload the audio element
    //     }

    // }, [currentTrack])

    const { currentTrack, showMusicPlayer } = useContext(appContent);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

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


    return (

        <div>

            {/* {
                currentTrack && <audio controls className='w-full'>

                    <source src={`${APP_URL}/home/singleMusic/${currentTrack.filename}`} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            } */}

            {/* {currentTrack && (
                <audio ref={audioRef} controls className="w-full">
                    Your browser does not support the audio tag.
                </audio>
            )} */}


{/* 
            <div className='flex'>
                <FaRegPauseCircle fontSize={'30px'} />

                <IoPlaySkipBackSharp fontSize={'30px'} />
                <IoPlaySkipForwardSharp fontSize={'30px'} />
            </div> */}


            {currentTrack && (
                <div className="w-full">
                    <audio ref={audioRef}>
                        Your browser does not support the audio tag.
                    </audio>
                    <div className="flex">
                        {isPlaying ? (
                            <FaRegPauseCircle onClick={handlePlayPause} fontSize={'30px'} className='hover:text-sky-700' />
                        ) : (
                            <FaRegPauseCircle onClick={handlePlayPause} fontSize={'30px'} className='hover:text-sky-700' />
                        )}
                        <IoPlaySkipBackSharp fontSize={'30px'} />
                        <IoPlaySkipForwardSharp fontSize={'30px'} />
                    </div>
                </div>
            )}
        </div>

    )
}
