import React, { useContext, useEffect, useRef, useState } from 'react'
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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState<number | null>();
  const { disclosure, setShowMusicPlyer } = useContext(appContent);
  const { isOpen, onOpen } = disclosure;
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const { currentTrack, setCurrentTrack } = useContext(appContent)
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const sliderRef = useRef<any>(null);
 
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Set the number of slides to show at a time
    slidesToScroll: 7, // Set the number of slides to scroll
  };


  return (
    <DIV className=''>
      <div className='flex flex-row-reverse'>
        <Navbar />
      </div>

      <div className='relative  '>
        <Slider className='' ref={sliderRef} {...settings}>
          {musicList &&
            musicList.map((music, index) => (
              <div key={index} className='h-48 p-2 hover:scale-95'>
                <Link
                  id='musicCont'
                  className='m-2 relative shadow-2xl p-1 hover:brightness-50'
                  to={''}
                >
                  {/* <Heading as='h6' size='sm'>
                    {truncateString(music.title, 10)}
                  </Heading>
                  <p>
                    <span>Artist:</span> {truncateString(music.artist, 10)}
                  </p>
                  <p>
                    <span>Album: </span>
                    {truncateString(music.album, 10)}
                  </p> */}
                  {/* <div className='flex'> */}
                    <img
                      className=''
                      src={`data:image/jpeg;base64, ${music.picture}`}
                      alt='Cover'
                    />
                  {/* </div> */}
                  {/* <FaPlayCircle
                    id='playBtn'
                    onClick={() => setTrackHandler(music)}
                    fontSize={'30px'}
                    className='text-shades-100 hover:text-sky-700 absolute top-0 right-0'
                  /> */}
                </Link>
              </div>
            ))}
        </Slider>
        <FaAngleLeft
          fontSize={'30px'}
          className='absolute inset-y-0 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer  hover:text-blue-500'
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <FaAngleRight
          fontSize={'30px'}
          className='absolute inset-y-0 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer  hover:text-blue-500'
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </DIV>
  );


  // return (
  //   <DIV className=''>
  //     {/* <div className='w-1/5'>
  //       <SideBar />
  //     </div> */}

  //     <div className='w-full flex flex-row-reverse'>
  //       <Navbar />

  //     </div>

  //     <div className='flex relative border-2 w-11/12'>
  //     {/* <Slider ref={sliderRef}  {...settings}> */}
  //       {musicList && musicList.map((music) => (
  //         <Link id='musicCont'
  //           className='m-2 relative shadow-2xl p-1 hover:brightness-50'
  //           to={''} key={music._id.toString()}>

  //           <Heading as='h6' size='sm'>
  //             {truncateString(music.title, 13)}
  //           </Heading>
  //           <p><span>Artist:</span> {truncateString(music.artist, 10)}</p>
  //           <p><span>Album: </span>{truncateString(music.album, 10)}</p>
  //           <div className='flex'>

  //             <img className='w-32' src={`data:image/jpeg;base64, ${music.picture}`} alt="Cover" />
  //           </div>


  //           <FaPlayCircle id='playBtn'
  //             onClick={() => setTrackHandler(music)}
  //             fontSize={'30px'}
  //             className='text-shades-100 hover:text-sky-700 absolute  top-0 right-0'
  //           />
  //         </Link>
  //       ))}
  //      {/* </Slider> */}

  //       <FaAngleLeft fontSize={'30px'} 
  //       className='absolute inset-y-0 left-0 top-1/2 transform -translate-y-1/2'
  //       onClick={() => sliderRef.current?.slickPrev()} 
  //        />

  //       <FaAngleRight fontSize={'30px'} 
  //       className='absolute inset-y-0 right-0 top-1/2 
  //       transform -translate-y-1/2'
  //       onClick={() => sliderRef.current?.slickNext()} 
  //        />


  //     </div>






  //   </DIV>
  // )
}


const DIV = styled.div`

`