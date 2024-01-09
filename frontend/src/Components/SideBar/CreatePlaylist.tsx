import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";

export const CreatePlaylist = () => {
    return (
        <div>

            <Menu>
                <MenuButton><IoMdAdd fontSize={'20px'} /></MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem>Menu 1</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                        <MenuItem>Open File</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>

        </div>
    )
}

