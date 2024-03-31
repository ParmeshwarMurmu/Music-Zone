import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";

// Define the type for Arjit singh Playlist Item

interface arjitSongs {
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


interface arjitPlaylist {
    arjitSingh : arjitSongs[],
    isLoading: boolean,
    isError: boolean
}

// Define the initial state using the above interface

const initialState : arjitPlaylist = {
    arjitSingh: [],
    isLoading: false,
    isError: false

}


// Function to Create Slice

export const arjitSongSlice = createSlice({
    name: 'arjitSingSongs',
    initialState,

    reducers:{
         arjitSingSongsIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
         },

         arjitSingSongsIsErrorAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
         },

         arjitSingSongSuccessAction: (state, action: PayloadAction<arjitSongs[]>)=>{
            state.arjitSingh = action.payload;
         }
    }
})

export const { arjitSingSongsIsLoadingAction, arjitSingSongsIsErrorAction, arjitSingSongSuccessAction } = arjitSongSlice.actions;
export const arjitSingSongsValueFromReduxStore = (state: RootState) => state.arjitSingSongs.arjitSingh;
export const arjitSingSongsIsLoadingValueFromReduxStore = (state: RootState) => state.arjitSingSongs.isLoading;
export const arjitSingSongsIsErrorValueFromReduxStore = (state: RootState) => state.arjitSingSongs.isError;

export default arjitSongSlice.reducer;