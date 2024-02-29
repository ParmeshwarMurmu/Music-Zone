import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { SideBar } from '../Components/SideBar/SideBar'
import axios from 'axios'
import { APP_URL, SINGLE_USER_DATA } from '../Endpoints/Endpoints'
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
import { Footer } from '../Components/Footer/Footer'
import { useAppSelector } from '../Redux/Store/Hook'
import { isAuthValueFromReduxStore } from '../Redux/isAuthReducer/reducer'



const getResponsiveSettings = (): { slidesToShow: number; slidesToScroll: number } => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    return { slidesToShow: 2, slidesToScroll: 2 };
  } else if (windowWidth < 900) {
    return { slidesToShow: 4, slidesToScroll: 4 };
  } else {
    return { slidesToShow: 7, slidesToScroll: 7 };
  }
};



export const Home = () => {
  const isAuth = useAppSelector(isAuthValueFromReduxStore)
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [data, setData] = useState<number | null>();
  const [sliderInitialized, setSliderInitialized] = useState(false);
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
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

  useEffect(()=>{

    if(isAuth){
     let musicUserId = localStorage.getItem('musicUserId')
     axios.get(`${APP_URL}${SINGLE_USER_DATA}/${musicUserId}`)
     .then((res)=>{
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
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 7, // Set the number of slides to show at a time
    // slidesToScroll: 7, // Set the number of slides to scroll,
    ...getResponsiveSettings(),
  };

  console.log("settings", settings)


  const initializeSlider = () => {
    // Check if the slider is already initialized
    if (!sliderInitialized) {
      setSliderInitialized(true);
    }


    // If already initialized, update the settings
    // If already initialized, update the settings
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
      const responsiveSettings = getResponsiveSettings();

      // Try using slickSetOption (older versions)
      if (sliderRef.current.slickSetOption) {
        sliderRef.current.slickSetOption('slidesToShow', responsiveSettings.slidesToShow);
        sliderRef.current.slickSetOption('slidesToScroll', responsiveSettings.slidesToScroll);
      }
      // If slickSetOption is not available, try using slickSetOptions (newer versions)
      else if (sliderRef.current.slickSetOptions) {
        sliderRef.current.slickSetOptions({
          slidesToShow: responsiveSettings.slidesToShow,
          slidesToScroll: responsiveSettings.slidesToScroll,
        });
      }
    }

  };


  useEffect(() => {
    // Initial setup
    initializeSlider();

    // Listen for window resize events and update the slider
    const handleResize = () => {
      setCurrentSlide(0);
      console.log('Window is resizing!');
      initializeSlider();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide]);




  return (
    <DIV className=''>
      <div className='flex flex-row-reverse border-4'>
        <Navbar />
      </div>

      

      <div className='relative'>



        <Slider className='' ref={sliderRef} {...settings}>
          {musicList &&
            musicList.map((music, index) => (

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
    </DIV>
  );


}


const DIV = styled.div`
#playBtn{
  display: none;
}

#musicContainer:hover #playBtn {
  display: block;
}

`