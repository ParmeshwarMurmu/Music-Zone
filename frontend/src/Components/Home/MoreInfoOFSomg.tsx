import React, { useState } from 'react'
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

interface MoreInfoOfSongProps {
    currentTrack: allMusic
}



const MoreInfoOFSomg: React.FC<MoreInfoOfSongProps> = ({ currentTrack }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement: string = 'bottom'

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
                            <img src={`data:image/jpeg;base64, ${currentTrack.picture}`} alt=""
                            // className='1/12'
                             />
                        </div>

                        <p>{currentTrack.filename}</p>
                        <p>{currentTrack.title}</p>
                        <p>{currentTrack.artist}</p>
                        <p>{currentTrack.duration}</p>
                        <p>{currentTrack.releaseYear}</p>
                        <p>{currentTrack.album}</p>
                        {/* <p>{currentTrack.title}</p> */}
                       
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default MoreInfoOFSomg
