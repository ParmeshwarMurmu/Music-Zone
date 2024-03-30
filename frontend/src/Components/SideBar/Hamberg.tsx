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

const Hamberg = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Button colorScheme='blue' variant={'none'} p={0} m={0} onClick={onOpen}>
                <GiHamburgerMenu />
            </Button>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <SideBar />
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Hamberg
