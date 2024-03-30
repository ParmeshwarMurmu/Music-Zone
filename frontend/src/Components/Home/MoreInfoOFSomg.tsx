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

interface MoreInfoOfSongProps {
    currentTrackInfo: allMusic
}



const MoreInfoOFSomg: React.FC<MoreInfoOfSongProps> = ({ currentTrackInfo }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
   
    const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
    const dispatch = useAppDispatch();

    const moreAlbums = useAppSelector(moreSongFromArtistAllSongsValueFromReduxStore)
    const moreYears = useAppSelector(moreSongFromYearValueFromReduxStore);
    const isLoading = useAppSelector(moreSongFromArtistIsLoadingValueFromReduxStore)

    const setTrackHandler = (clickedMusic: allMusic) => {
        setCurrentTrack(clickedMusic)
        //  onOpen()
        setShowMusicPlyer(true)

    }

    useEffect(() => {
        dispatch(MoreFromArtist(currentTrackInfo.album, currentTrackInfo.releaseYear))
    }, [currentTrack])

    // console.log(moreAlbums)
    // console.log(moreYears)



    return (
        <DIV className=''>
            <Button variant={'none'} className={`hover:scale-150`} style={{ position: 'absolute', left: '50%', top: '-25px' }} colorScheme='blue' p={0} m={0} onClick={onOpen}>
                <MdKeyboardArrowUp fontSize={'30px'} color='black' />
            </Button>
            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent height={'100vh'}>
                    <DrawerCloseButton />
                    {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawerbgbhbh</DrawerHeader> */}
                    <DrawerBody>
                        <div className='w-2/12'>
                            <img src={`data:image/jpeg;base64, ${currentTrackInfo.picture}`} alt=""
                            // className='1/12'
                            />

                            <p className={`font-Inter font-semibold text-16`}>Title : <span className={`font-openSans font-normal text-14`}>{currentTrackInfo.title}</span></p>
                            <p className={`font-Inter font-semibold text-16`}>Artist :  <span className={`font-openSans font-normal text-14`}>{currentTrackInfo.artist}</span></p>
                            {/* <p>Duration : <span>{currentTrack.duration}</span></p> */}
                            <p className={`font-Inter font-semibold text-16`}>Release Yaer : <span className={`font-openSans font-normal text-14`}>{currentTrackInfo.releaseYear}</span></p>
                            <p className={`font-Inter font-semibold text-16`}>Album : <span className={`font-openSans font-normal text-14`}>{currentTrackInfo.album}</span></p>
                            <p>Dhunu Murmu</p>
                        </div>



                        <div>
                            <p>More From {currentTrackInfo.album}</p>

                            {
                                isLoading ? <div>Loading</div> :
                                    <div className='grid grid-cols-9 gap-y-2  bg-shades-200'>
                                        {
                                            moreAlbums.map((music, index) => (
                                                <div key={index}>

                                                    <div id='musicCont' className='mb-1 h-124 w-124 p-2 hover:scale-95 border-2 border-red-600'

                                                    >
                                                     
                                                        {/* <div> */}
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







                                                            {/* </div> */}
                                                            {/* </Link> */}
                                                        </div>


                                                    </div>


                                                </div>
                                            ))
                                        }
                                    </div>
                            }


                        </div>


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



    
`
