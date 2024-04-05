import React, { useContext, useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Button
} from '@chakra-ui/react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { allMusic } from '../../Interfaces/Interfce'
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook';
import { MoreFromArtist } from '../../Redux/MoreFromArtistReducer/Function';
import { moreSongFromArtistAllSongsValueFromReduxStore, moreSongFromArtistIsLoadingValueFromReduxStore, moreSongFromYearValueFromReduxStore } from '../../Redux/MoreFromArtistReducer/reducer';
import { appContent } from '../../ContextApi/ContextApi';
import { FaPlayCircle } from "react-icons/fa";
import styled from 'styled-components'
import { IoCloseSharp } from "react-icons/io5";
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer';
import { FaAngleUp } from "react-icons/fa";
import { MusicPlayerProvider } from './MusicPlayerProvider';


interface MoreInfoOfSongProps {
    currentTrackInfo: allMusic
}



const MoreInfoOFSomg: React.FC<MoreInfoOfSongProps> = ({ currentTrackInfo }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    

    const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
    const dispatch = useAppDispatch();
     const theme = useAppSelector(themeValueFromReduxStore)
     const [clicked, setClicked] = useState<boolean>(false)
    const moreAlbums = useAppSelector(moreSongFromArtistAllSongsValueFromReduxStore)
    const moreYears = useAppSelector(moreSongFromYearValueFromReduxStore);
    const isLoading = useAppSelector(moreSongFromArtistIsLoadingValueFromReduxStore)

    const setTrackHandler = (clickedMusic: allMusic) => {
        setCurrentTrack(clickedMusic)
        //  onOpen()
        setShowMusicPlyer(true)

    }

    const clickedHandler = ()=>{
        onOpen();
        // setClicked(true)
    }

    const crossHandler = ()=>{
        onClose();
        // setClicked(false)
    }

    useEffect(() => {
        dispatch(MoreFromArtist(currentTrackInfo.album, currentTrackInfo.releaseYear))
    }, [currentTrack])

    // console.log(moreAlbums)
    // console.log(moreYears)



    return (
        <DIV className=''>
            {/* <Button variant={'none'} className={`hover:scale-125 z-20`} style={{ position: 'absolute', left: '50%', top: '-25px' }} p={0} m={0} onClick={onOpen}>
                <MdKeyboardArrowUp fontSize={'30px'} color='black' />
            </Button> */}

{/* <FaAngleLeft

className='absolute inset-y-0 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-neutral-silver
lg:text-30
md:text-20
sm:text-20
small:text-20
mobiles-max:text-20
hover:text-blue-500'

onClick={() => sliderRef.current?.slickPrev()}
/> */}

            <div onClick={clickedHandler}
            //  className={`absolute  top-53 mobiles-max:left-52`}
            id='moreInfo'
             
            //  style={{ position: 'absolute', left: '51%', top: '-6px' }} 
             >
            <FaAngleUp
            className=' transform -translate-y-1/2 cursor-pointer bg-neutral-silver
            lg:text-30
            md:text-20
            sm:text-20
            small:text-20
            mobiles-max:text-20
            hover:text-blue-500'

             />

            </div>

            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}
        
            >
                <DrawerOverlay />
                <DrawerContent height={'100vh'} style={{ position: 'relative' }}
                backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`}
                >

                    {/* <DrawerHeader borderBottomWidth='1px'>Basi w-2/12c Drawerbgbhbh</DrawerHeader> */}
                    <DrawerBody p={0} m={0}>
                        <div className={`absolute top-0 right-0 pr-2 pt-2 bg-neutral-white cursor-pointer`} onClick={crossHandler}>
                            <IoCloseSharp id='crossBtn' style={{ marginBottom: '6px', marginLeft: '6px'}} fontSize={'20px'}   />
                        </div>

                        <div className='w-2/5 small:w-full mobiles-max:w-5/12 sm:w-4/12 md:w-1/4'>
                            <img src={`data:image/jpeg;base64, ${currentTrackInfo.picture}`} alt=""
                            // className='1/12'
                            />

                            <div className={'p-2'}>
                                <p className={`font-Inter font-semibold text-16 small:text-14 ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Title : <span className={`font-Inter font-normal text-14 small:text-12 ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{currentTrackInfo.title}</span></p>
                                <p className={`font-Inter font-semibold text-16 small:text-14 ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Artist :  <span className={`font-Inter font-normal text-14 small:text-12 ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{currentTrackInfo.artist}</span></p>
                                {/* <p>Duration : <span>{currentTrack.duration}</span></p> */}
                                <p className={`font-Inter font-semibold text-16 small:text-14 ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Release Year : <span className={`font-Inter font-normal text-14 small:text-12 ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{currentTrackInfo.releaseYear}</span></p>
                                <p className={`font-Inter font-semibold text-16 small:text-14 ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>Album : <span className={`font-Inter font-normal text-14 small:text-12 ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'}`}>{currentTrackInfo.album}</span></p>
                            </div>

                        </div>



                        {/* <div>
                            <p>More From {currentTrackInfo.album}</p>

                            {
                                isLoading ? <div>Loading</div> :
                                    <div className='grid grid-cols-9 gap-y-2  bg-shades-200'>
                                        {
                                            moreAlbums.map((music, index) => (
                                                <div key={index}>

                                                    <div id='musicCont' className='mb-1 h-124 w-124 p-2 hover:scale-95 border-2 border-red-600'

                                                    >

                                                        
                                                        <div className='relative'>
                                                            <img
                                                                className=''
                                                                src={`data:image/jpeg;base64, ${music.picture}`}
                                                                alt='Cover'
                                                            />

                                                            <FaPlayCircle
                                                                id='playBtnIcon'
                                                                onClick={() => setTrackHandler(music)}
                                                                fontSize={'50px'}
                                                                className={`text-neutral-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute  z-50 hover:scale-125`}
                                                            />







                                     
                                                        </div>


                                                    </div>


                                                </div>
                                            ))
                                        }
                                    </div>
                            }


                        </div> */}

                      {/* {
                        clicked && <MusicPlayerProvider />
                      }    */}

                        


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </DIV>
    )
}

export default MoreInfoOFSomg

const DIV = styled.div`

#playBtnIcon{
  display: none;
}

#musicCont:hover #playBtnIcon {
  display: block;
}

#moreInfo{
    position: absolute;
    left: 51%;
    top: -6px;
}

@media screen(max-width: 639px) {
    #moreInfo{
        left: 30%
    }
    
}


    
`
