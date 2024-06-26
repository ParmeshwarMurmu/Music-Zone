import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { allMusic } from "../../Interfaces/Interfce";

// Defined type for the user playlist

interface MusicItem {
    _id: string,
    fileName: string,
    title: string,
    artist: string,
    album: string,
    picture: string,
    releaseYear: string,
    musicId: string,

}

interface userPlaylistItem {
    _id: string,
    playlistName: string,
    userId: string,
    musicId: allMusic
}



interface userPlaylist {
    playlist : userPlaylistItem [],
    isLoading: boolean,
    isError: boolean
}

const initialState: userPlaylist = {
    playlist : [],
    isLoading : false,
    isError : false
}



// Function to Playlist Create Slice

export const userPlaylistSlice = createSlice({
    name: 'userPlaylist',
    initialState,

    reducers: {

        userPlaylistIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        userPlaylistIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
        },

        userPlaylistAllPlaylist: (state, action: PayloadAction<userPlaylistItem[]>) =>{
            state.playlist = action.payload;
        },

        userPlaylistResetAction: (state) => {
            return initialState;
        }

    }

})

export const { userPlaylistIsLoadingAction, userPlaylistIsEorrAction, userPlaylistAllPlaylist, userPlaylistResetAction } = userPlaylistSlice.actions;
export const userPlaylistAllPlaylistValueFromReduxStore = (state: RootState) => state.userPlaylist.playlist;
export const userPlaylistIsLoadingActionValueFromReduxStore = (state: RootState) => state.userPlaylist.isLoading;
export const userPlaylistIsEorrActionValueFromReduxStore = (state: RootState) => state.userPlaylist.isError;




export default userPlaylistSlice.reducer