import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";



// Defined type for the slice state for themeState

interface themeState {
    theme: string
}

// Defined the initial state using above themeState interface

const initialState: themeState ={
    theme: 'dark'
}

// Function to isAuthState Create Slice

export const themeSlice = createSlice({
    name: 'themeName',
    initialState,

    reducers: {
       

        themeSuccessAction: (state, action: PayloadAction<string>)=>{
            state.theme = action.payload;
        },


        themeResetAction: (state) => {
            return initialState;
        }

    }
})


export const { themeSuccessAction} = themeSlice.actions;
export const themeValueFromReduxStore = (state: RootState)=> state.themeName.theme;




export default themeSlice.reducer;