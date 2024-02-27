import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";



// Defined type for the slice state for isAuthState

interface isAuthState {
    isAuth: boolean,
    isLoading: boolean,
    isError: boolean
}

// Defined the initial state using above isAuthState interface

const initialState: isAuthState ={
    isAuth: false,
    isLoading: false,
    isError: false
}

// Function to isAuthState Create Slice

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,

    reducers: {
        isAuthIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        isAuthErrorAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;

        },

        isAuthAction: (state, action: PayloadAction<boolean>)=>{
            state.isAuth = action.payload;
        },


        isAuthResetAction: (state) => {
            return initialState;
        }

    }
})


export const { isAuthIsLoadingAction, isAuthErrorAction, isAuthAction, isAuthResetAction} = isAuthSlice.actions;
export const isAuthIsLoadingValueFromReduxStore = (state: RootState)=> state.isAuth.isLoading;
export const isAuthIsErrorValueFromReduxStore = (state: RootState)=> state.isAuth.isError;
export const isAuthValueFromReduxStore = (state: RootState)=> state.isAuth.isAuth;



export default isAuthSlice.reducer;