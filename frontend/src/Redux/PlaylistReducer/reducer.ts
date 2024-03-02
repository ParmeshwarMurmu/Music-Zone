import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { FaLess } from "react-icons/fa";


// Defined type for the slice state for User Playlist

interface Playlist {
    usersPlaylist: String,
    isLoading: boolean,
    isError: boolean
}


// Define the initial state using the above interface

const initialState: Playlist = {
    usersPlaylist : '',
    isLoading: false,
    isError: false
}


// Function to Playlist Create Slice

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,

    reducers: {

        playlistIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;

        },

        playlistIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;

        },

        playlistAllUserPlaylist: (state, action: PayloadAction<string>) =>{

        },

        playlistResetAction: (state) => {
            return initialState;
        }

    }

})