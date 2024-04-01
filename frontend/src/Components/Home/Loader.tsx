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
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'




const Loader = () => {

    
    const sliderRef = useRef<any>(null);
    

    const loaderArray = [
        {}, {}, {}, {}, {}, {}, {},
    ]


    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
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

                <div className={'flex justify-between pr-2  w-full'}>
                    <Skeleton h={'20px'} w={'150px'} marginLeft={'8px'}>

                    </Skeleton>

                    <Skeleton h={'20px'} w={'100px'} marginLeft={'8px'}>

                    </Skeleton>

                </div>

               
    



                <Slider className='' ref={sliderRef} {...settings}>
                    {
                        loaderArray.map((music, index) => (

                            <div key={index} id='musicContainer' className='h-auto p-2 hover:scale-95'

                            >
                                <Link
                                    id='musicCont'
                                    // hover:brightness-50
                                    className='m-2 p-1 hover: shadow-inner'
                                    to={''}
                                >

                                    <div className='relative'>
                                        

                                        <div className='h-50 animate-pulse bg-neutral-loader w-full'>

                                        </div>







                                    </div>
                                </Link>
                            </div>
                        ))}
                </Slider>

                



            </div>
        </div>
    )
}

export default Loader
