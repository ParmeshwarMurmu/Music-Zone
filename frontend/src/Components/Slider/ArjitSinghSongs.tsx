import React from 'react'


import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaPlayCircle } from "react-icons/fa";
import { Button, Heading, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import styled from 'styled-components'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook';
import { isAuthValueFromReduxStore } from '../../Redux/isAuthReducer/reducer';
import { allMusic } from '../../Interfaces/Interfce';
import { appContent } from '../../ContextApi/ContextApi';
import { APP_URL, SINGLE_USER_DATA } from '../../Endpoints/Endpoints';
import { get90Song } from '../../Redux/90sSongReducer/Function';
import { arjitSingSongsValueFromReduxStore } from '../../Redux/ArjitSinghReducer/reducer';
import { getArjitSinghSong } from '../../Redux/ArjitSinghReducer/Function';




const ArjitSinghSongs = () => {
  
    const isAuth = useAppSelector(isAuthValueFromReduxStore)
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [data, setData] = useState<number | null>();
  const [sliderInitialized, setSliderInitialized] = useState(false);
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
  const sliderRef = useRef<any>(null);
  const dispatch = useAppDispatch()

  const arjitSingSongs = useAppSelector(arjitSingSongsValueFromReduxStore)



  useEffect(() => {

    dispatch(getArjitSinghSong())

  }, [])

  useEffect(() => {

    if (isAuth) {
      let musicUserId = localStorage.getItem('musicUserId')
      axios.get(`${APP_URL}${SINGLE_USER_DATA}/${musicUserId}`)
        .then((res) => {
          //  console.log(res);
          setUserDetail(res.data.userData)
        })
    }

  }, [isAuth])



  // console.log("musicList", musicList);

  const setTrackHandler = (clickedMusic: allMusic) => {
    setCurrentTrack(clickedMusic)
    //  onOpen()
    setShowMusicPlyer(true)

  }

  // console.log('Current Track', currentTrack)

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };



  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 7, // Set the number of slides to show at a time
    slidesToScroll: 7, // Set the number of slides to scroll,
    // ...getResponsiveSettings(),
    responsive: [
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        },
      },
      {
        breakpoint: 640, // Extra small screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        },
      },

      {
        breakpoint: 640, // Extra small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },

      {
        breakpoint: 420, // Extra small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
    ],
  };

  
  




  return (
    <div className={''}>
      <div className='relative'>

      <div className={'flex justify-between  pl-2 pr-2 absolute w-full top-10'}>
        <p className={' cursor-pointer text-14 bg-neutral-gery text-neutral-white p-1 rounded-md'}>Best of Arijit Singh</p>
        <p className={'cursor-pointer text-14'}>View All</p>
       </div>

        <Slider  className='' ref={sliderRef} {...settings}>
          {arjitSingSongs.length > 0 &&
            arjitSingSongs.map((music, index) => (

              <div key={index} id='musicContainer' className='h-auto p-2 hover:scale-95 '

              >
                <Link
                  id='musicCont'
                  // hover:brightness-50
                  className='m-2 p-1 hover: shadow-inner'
                  to={''}
                >

                  <div className='relative'>
                    <img
                      className=''
                      src={`data:image/jpeg;base64, ${music.picture}`}
                      alt='Cover'
                    />
                    {/* </div> */}
                    <FaPlayCircle
                      id='playBtn'
                      onClick={() => setTrackHandler(music)}
                      fontSize={'50px'}
                      className={`text-neutral-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  z-50 hover:scale-125`}
                    />


                    {/* <div className={'z-50 absolute top-0 right-0  hover:z-50'}>

                    </div> */}


                  </div>
                </Link>
              </div>
            ))}
        </Slider>




        <FaAngleLeft

          className='absolute inset-y-0 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-neutral-silver
  lg:text-3xl
  md:text-base
  sm:text-base
  hover:text-blue-500'

          onClick={() => sliderRef.current?.slickPrev()}
        />



        <FaAngleRight

          className='absolute inset-y-0 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer  bg-neutral-silver
  lg:text-3xl
  md:text-base
  sm:text-base
  hover:text-blue-500'
          onClick={() => sliderRef.current?.slickNext()}
        />





      </div>
    </div>
  )
}

export default ArjitSinghSongs
