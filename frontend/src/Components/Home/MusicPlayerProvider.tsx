import React, { useContext } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

    Button,
  } from '@chakra-ui/react'
import { appContent } from '../../ContextApi/ContextApi'
import { Placement } from '@popperjs/core';


export const MusicPlayerProvider = () => {
    const { disclosure } = useContext(appContent);
    const { isOpen, onOpen, onClose } = disclosure;
    

    const [placement, setPlacement] = React.useState<'top' | 'right' | 'bottom' | 'left'>('bottom')

    return (
        <>
            
            {/* <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button> */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
