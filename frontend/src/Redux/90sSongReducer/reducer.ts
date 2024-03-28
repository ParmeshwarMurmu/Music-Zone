import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";


// Defined type for the 90S Playlist Item

interface old90sSong {
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

interface playlist90S {
    
    playlist90S : old90sSong[],
    isLoading: boolean,
    isError: boolean
}

// Define the initial state using the above interface

const initialState: playlist90S = {
    playlist90S : [],
    isLoading: false,
    isError: false
}


// Function to Create Slice


export const playlist90Slice = createSlice({
    name: 'playlist90S',
    initialState,

    reducers: {

        playlist90SIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        playlist90SIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
        },

        playlist90SAllSongs: (state, action: PayloadAction<old90sSong[]>) =>{
            state.playlist90S  = action.payload;
        },

        playlistResetAction: (state) => {
            return initialState;
        }

    }

})


export const { playlist90SIsLoadingAction, playlist90SIsEorrAction, playlist90SAllSongs, playlistResetAction } = playlist90Slice.actions
export const playlist90SAllSongsValueFromReduxStore = (state: RootState) => state.playlist90S.playlist90S;


export default playlist90Slice.reducer;