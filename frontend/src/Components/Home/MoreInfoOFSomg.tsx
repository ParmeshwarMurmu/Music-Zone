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
import { moreSongFromArtistAllSongsValueFromReduxStore } from '../../Redux/MoreFromArtistReducer/reducer';
import { appContent } from '../../ContextApi/ContextApi';

interface MoreInfoOfSongProps {
    currentTrackInfo: allMusic
}



const MoreInfoOFSomg: React.FC<MoreInfoOfSongProps> = ({ currentTrackInfo }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement: string = 'bottom';
    const { currentTrack, setCurrentTrack, setShowMusicPlyer, setUserDetail } = useContext(appContent)
    const dispatch = useAppDispatch();

    const moreAlbums = useAppSelector(moreSongFromArtistAllSongsValueFromReduxStore)

    useEffect(()=>{
        dispatch(MoreFromArtist(currentTrackInfo.album, currentTrackInfo.releaseYear))
    }, [currentTrack])

    // console.log(moreAlbums)

    return (
        <div className=''>
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
                            <p>More From {currentTrackInfo.artist}</p>


                        </div>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default MoreInfoOFSomg
