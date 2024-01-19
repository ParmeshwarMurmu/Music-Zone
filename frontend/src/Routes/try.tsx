// import React from 'react'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { womenHeelsTrendingData } from '../Redux/shoeHeelsTrendingReducer/action';

import { useContext, useEffect,} from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { SideBar } from '../Components/SideBar/SideBar'
import axios from 'axios'
import { APP_URL } from '../Endpoints/Endpoints'
import { allMusic } from '../Interfaces/Interfce'
import { appContent } from '../ContextApi/ContextApi'
import { FaPlayCircle } from "react-icons/fa";
import { Heading, useDisclosure } from '@chakra-ui/react'


export const Trye = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState<number | null>();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 1,
        afterChange: (index: number) => {

            setCurrentSlide(index)
        },
        variableWidth: true,
    };

    const { disclosure, setShowMusicPlyer } = useContext(appContent);
  const { isOpen, onOpen } = disclosure;
  const [musicList, setMusicList] = useState<allMusic[]>([])
  const { currentTrack, setCurrentTrack } = useContext(appContent)
  const [isHovered, setIsHovered] = useState<boolean>(false);
//   let womenHeels : allMusic []  = []
type WomenHeels = Array<Array<allMusic>>;
let womenHeels: WomenHeels = [];
  if(musicList.length > 0){
    womenHeels = [
        [
            musicList[0],
            musicList[1]

        ],

        [
            musicList[2],
            musicList[3]

        ],
        
    
    ]
}
  

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


  


    
    
  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
            {musicList && musicList.map((music) => (
          <Link id='musicCont' 
          className='m-2 relative shadow-2xl p-1 hover:brightness-50' 
          to={''} key={music._id.toString()}>
            
            <Heading as='h6' size='sm'>
              {truncateString(music.title, 13)}
            </Heading>
            <p><span>Artist:</span> {truncateString(music.artist, 10)}</p>
            <p><span>Album: </span>{truncateString(music.album, 10)}</p>
            <div className='flex'>

              <img className='w-24' src={`data:image/jpeg;base64, ${music.picture}`} alt="Cover" />
            </div>
            
            
            <FaPlayCircle id='playBtn'  
            onClick={()=> setTrackHandler(music)} 
            fontSize={'30px'} 
            // className='text-shades-100 hover:text-sky-700 absolute  top-0 right-0'
             />
          </Link>
        ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                { womenHeels.map((_, index) => (
                    <div >
                        <span
                            key={index}
                            className={currentSlide === index ? 'active-dot' : 'dot'}
                            onClick={() => {
                                setCurrentSlide(index);
                
                                setData(123)

                            }}
                        />
                    </div>
                ))}
            </div>
        </DIV>
  )
}



const DIV = styled.div`
 margin-top: 30px;
  
  /* .main{
    display: flex;
    justify-content: space-between;
    
  } */

.slider{
  width: 10%; 
  /* margin: 0 auto;  */
  border: 2px solid red;
  height: 200px;

 
}

.slideshow-container{
    border: 2px solid red;
    background-color: red;
}

--slider-arrow-color: #050505; 
  
  .slick-prev::before,
  .slick-next::before {
    color: var(--slider-arrow-color);
  }
  

  .slideshow-container{
    z-index: -1;
  }

  /* .imgDiv {
  position: relative;
  cursor: pointer;
  transition: all .3s;
}

.imgDiv:hover {
  transform: scale(0.9);
} */

/* 
@media screen and (max-width: 1237px) {
   
      .imgDiv{
          height: 170px;
      }

      .sliderImage{
           width: 170px;
      }

      .slider{

      }
   
      
    }


    @media screen and (max-width: 1076px) {


      .slider{
        height: 180px;
        width: 77%;
      }

      .sliderImage{
        height: 180px;
        width: 150px;
      }
   
      
    }
  
@media screen and (max-width: 768px) {
 
      .imgDiv{
          height: 170px;
      }

      .sliderImage{
           width: 160px;
      }

      .slider{

      }
   
      
    }

    @media screen and (max-width: 639px) {
   
      .slider{
        height: 150px;
        width: 89%;
      }

      .sliderImage{
        height: 150px;
        width: 130px;
      }
   
      
    }


    @media screen and (max-width: 500px) {
      /* Your styles for large devices go here */

      .slider{
        height: 120px;
        width: 89%;
      }

      .sliderImage{
        height: 120px;
        width: 110px;
      }
   
      
    }


    @media screen and (max-width: 425px) {
      .slider{
  height: 140px;
  width: 190%;
}

.sliderImage{
  height: 120px;
  width: 110px;
}


      
    } */

    


`


