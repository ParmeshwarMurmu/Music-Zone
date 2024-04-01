import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";

// Define the type for Arjit singh Playlist Item

interface armaanAndDarshanSong {
    filename: string,
    title: string,
    artist: string,
    album: string,
    picture: string,
    duration: string,
    releaseYear: string,
    _id: ObjectId,
    musicId: string
    
}

// Defined type for the slice state for arjit  Playlist


interface armaanAndDarshanSongPlaylist {
    armaanAndDarshan : armaanAndDarshanSong[],
    isLoading: boolean,
    isError: boolean
}

// Define the initial state using the above interface

const initialState : armaanAndDarshanSongPlaylist = {
    armaanAndDarshan: [],
    isLoading: false,
    isError: false

}


// Function to Create Slice

export const armaanAndDarshanSongSlice = createSlice({
    name: 'armaanAndDarshanSongName',
    initialState,

    reducers:{
        armaanAndDarshanSongIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
         },

         armaanAndDarshanSongIsErrorAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
         },

         armaanAndDarshanSongSuccessAction: (state, action: PayloadAction<armaanAndDarshanSong[]>)=>{
            state.armaanAndDarshan = action.payload;
         }
    }
})

export const { armaanAndDarshanSongIsLoadingAction, armaanAndDarshanSongIsErrorAction, armaanAndDarshanSongSuccessAction } = armaanAndDarshanSongSlice.actions;
export const armaanAndDarshanSongValueFromReduxStore = (state: RootState) => state.armaanAndDarshanSongName.armaanAndDarshan;
export const armaanAndDarshanSongIsLoadingValueFromReduxStore = (state: RootState) => state.armaanAndDarshanSongName.isLoading;
export const armaanAndDarshanSongIsErrorValueFromReduxStore = (state: RootState) => state.armaanAndDarshanSongName.isError;

export default armaanAndDarshanSongSlice.reducer;