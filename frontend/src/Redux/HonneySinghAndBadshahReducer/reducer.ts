import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";

// Define the type for Arjit singh Playlist Item

interface honneySinghAndBadshahSong {
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


interface honneySinghAndBadshahSongPlaylist {
    honneySinghAndBadshah : honneySinghAndBadshahSong[],
    isLoading: boolean,
    isError: boolean
}

// Define the initial state using the above interface

const initialState : honneySinghAndBadshahSongPlaylist = {
    honneySinghAndBadshah: [],
    isLoading: false,
    isError: false

}


// Function to Create Slice

export const honneySinghAndBadshahSongSlice = createSlice({
    name: 'honneySinghAndBadshahSongName',
    initialState,

    reducers:{
        honneySinghAndBadshahSongIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
         },

         honneySinghAndBadshahSongIsErrorAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
         },

         honneySinghAndBadshahSongSuccessAction: (state, action: PayloadAction<honneySinghAndBadshahSong[]>)=>{
            state.honneySinghAndBadshah = action.payload;
         }
    }
})

export const { honneySinghAndBadshahSongIsLoadingAction, honneySinghAndBadshahSongIsErrorAction, honneySinghAndBadshahSongSuccessAction } = honneySinghAndBadshahSongSlice.actions;
export const honneySinghAndBadshahSongValueFromReduxStore = (state: RootState) => state.honneySinghAndBadshahSongName.honneySinghAndBadshah;
export const honneySinghAndBadshahSongIsLoadingValueFromReduxStore = (state: RootState) => state.honneySinghAndBadshahSongName.isLoading;
export const honneySinghAndBadshahSongIsErrorValueFromReduxStore = (state: RootState) => state.honneySinghAndBadshahSongName.isError;

export default honneySinghAndBadshahSongSlice.reducer;