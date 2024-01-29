import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";



// Defined type for the slice state for Login

interface LoginState {
    email: string,
    password: string,
    isLoading: boolean,
    isError: boolean
}

// Defined the initial state using above LoginState interface

const initialState: LoginState ={
    email: '',
    password: '',
    isLoading: false,
    isError: false
}

// Function to Login Create Slice

export const loginSlice = createSlice({
    name: 'login',
    initialState,

    reducers: {
        loginIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        loginIsErrorAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;

        },

        loginEmailAction: (state, action: PayloadAction<string>)=>{
            state.email = action.payload;
        },

        loginPasswordAction: (state, action: PayloadAction<string>)=>{
            state.password = action.payload;
        },

        loginResetAction: (state) => {
            return initialState;
        }

    }
})


export const { loginIsLoadingAction, loginIsErrorAction, loginEmailAction, loginPasswordAction, loginResetAction} = loginSlice.actions;
export const loginIsLoadingValueFromReduxStore = (state: RootState)=> state.login.isLoading;
export const loginIsErrorValueFromReduxStore = (state: RootState)=> state.login.isError;
export const loginEmailValueFromReduxStore = (state: RootState)=> state.login.email;
export const loginPasswordValueFromReduxStore = (state: RootState)=> state.login.password;



export default loginSlice.reducer;