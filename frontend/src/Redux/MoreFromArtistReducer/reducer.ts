

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";


// Defined type for the 90S Playlist Item

interface moreSongFromArtist {
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

// Defined type for the slice state for 90  Playlist

interface moreSongs {
    
    moreSongsFromArtist : moreSongFromArtist[],
    moreSongsYear: moreSongFromArtist[]
    isLoading: boolean,
    isError: boolean
}

// Define the initial state using the above interface

const initialState: moreSongs = {
    moreSongsFromArtist : [],
    moreSongsYear: [],
    isLoading: false,
    isError: false
}


// Function to Create Slice


export const moreSongFromArtistSlice = createSlice({
    name: 'moreSongsArt',
    initialState,

    reducers: {

        moreSongFromArtistIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        moreSongFromArtistIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
        },

        moreSongFromArtistSuccessAction: (state, action: PayloadAction<moreSongFromArtist[]>) =>{
            state.moreSongsFromArtist  = action.payload;
        },

        moreSongFromYearSuccessAction: (state, action: PayloadAction<moreSongFromArtist[]>) =>{
            state.moreSongsYear  = action.payload;
        },

        moreSongFromArtistPlaylistResetAction: (state) => {
            return initialState;
        }

    }

})


export const { moreSongFromArtistIsLoadingAction,moreSongFromYearSuccessAction, moreSongFromArtistIsEorrAction, moreSongFromArtistSuccessAction, moreSongFromArtistPlaylistResetAction } = moreSongFromArtistSlice.actions
export const moreSongFromArtistAllSongsValueFromReduxStore = (state: RootState) => state.moreSongsArt.moreSongsFromArtist;
export const moreSongFromArtistIsLoadingValueFromReduxStore = (state: RootState) => state.moreSongsArt.isLoading;
export const moreSongFromYearValueFromReduxStore = (state: RootState) => state.moreSongsArt.moreSongsYear;


export default moreSongFromArtistSlice.reducer;