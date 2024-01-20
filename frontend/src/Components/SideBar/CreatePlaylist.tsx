import React, { useContext, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";
import { appContent } from '../../ContextApi/ContextApi';




export const CreatePlaylist = () => {
   
    const { createPlaylist, setCreatePlaylist } = useContext(appContent)
    

    return (
        <div>

            <Menu>
                <MenuButton><IoMdAdd fontSize={'20px'} /></MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem onClick={()=> setCreatePlaylist(true)}>New Playlist</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                        <MenuItem>Open File</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>

        </div>
    )
}

