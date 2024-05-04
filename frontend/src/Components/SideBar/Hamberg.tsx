import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBar } from './SideBar';
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer';
import { useAppSelector } from '../../Redux/Store/Hook';

const Hamberg = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const theme = useAppSelector(themeValueFromReduxStore)

    return (
        <div>
            <Button colorScheme='blue' variant={'none'} p={0} m={0} onClick={onOpen}>
                <GiHamburgerMenu
                 color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
                 />
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                backgroundColor={`${theme === 'dark' ? 'rgb(17 24 39)' : 'white'}`}
                >
                    <DrawerCloseButton
                    color={`${theme === 'dark' ? 'white' : 'rgb(17 24 39)' }`}
                     />
                    <SideBar />
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Hamberg
