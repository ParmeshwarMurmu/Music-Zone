import React, { useContext, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
    useToast,
} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";
import { appContent } from '../../ContextApi/ContextApi';
import { useAppSelector } from '../../Redux/Store/Hook';
import { isAuthValueFromReduxStore } from '../../Redux/isAuthReducer/reducer';
import { useNavigate } from 'react-router-dom';
import { themeValueFromReduxStore } from '../../Redux/ThemeReducer/reducer';




export const CreatePlaylist = () => {

    const toast = useToast();
    const navigate = useNavigate();
    const { createPlaylist, setCreatePlaylist } = useContext(appContent)
    const isAuth = useAppSelector(isAuthValueFromReduxStore);
    const theme = useAppSelector(themeValueFromReduxStore);

    // Function to handle Create New Playlist

    const createNewPlaylist = () => {
        if (isAuth) {
            setCreatePlaylist(true)
        }
        else {
            toast({
                title: `Please Login`,
                position: 'top-right',
                status: 'warning',
                isClosable: true,
                duration: 2000,
            })
            navigate('/login')
        }

    }


    return (
        <div>

            <Menu>
                <MenuButton>
                    <IoMdAdd fontSize={'20px'}
                     color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`} 
                     />
                </MenuButton>
                <Portal>
                    <MenuList zIndex={10}>
                        <MenuItem onClick={createNewPlaylist}>New Playlist</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                        <MenuItem>Open File</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>

        </div>
    )
}

