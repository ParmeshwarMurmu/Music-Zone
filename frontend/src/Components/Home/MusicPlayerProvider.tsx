import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { appContent } from '../../ContextApi/ContextApi';
import { APP_URL } from '../../Endpoints/Endpoints';
import { FaPlayCircle } from "react-icons/fa";

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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

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

    return (

        <div className='flex justify-center justify-items-center'>

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
                <div className="w-1/6 flex justify-center justify-items-center pt-3">
                    <audio ref={audioRef}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    >
                        Your browser does not support the audio tag.
                    </audio>
                    <div className="flex">
                        <IoPlaySkipBackSharp fontSize={'30px'} />
                        {isPlaying ? (
                            <FaRegPauseCircle onClick={handlePlayPause} fontSize={'30px'} className='hover:text-sky-700' />
                        ) : (
                            <FaPlayCircle onClick={handlePlayPause} fontSize={'30px'} className='hover:text-sky-700' />
                        )}

                        <IoPlaySkipForwardSharp fontSize={'30px'} />
                    </div>

                    <div className="flex items-center mt-2">
                        <span>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                        />
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            )}
        </div>

    )
}
