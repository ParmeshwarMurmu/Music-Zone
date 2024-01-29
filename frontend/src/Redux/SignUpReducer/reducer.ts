import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/Store'



// Defined type for the slice state for Sign Up 
interface SignUpState {
    email: string,
    password: string,
    isLoading: boolean,
    isError: boolean
}

// Defined the initial state using above interface

const initialState: SignUpState = {
    email: '',
    password: '',
    isLoading: false,
    isError: false
}

// Function to SignUp Create Slice

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,

    reducers:{

        sigUpIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;

        },

        sigUpIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;

        },
        
        signUpEmailAction: (state, action: PayloadAction<string>)=>{
            state.email = action.payload;
        },

        signUpPasswordAction: (state, action: PayloadAction<string>)=>{
            state.password = action.payload;
        },

        signUpResetAction: (state) => {
            return initialState;
        }
    }
})


export const {signUpEmailAction, signUpPasswordAction, sigUpIsLoadingAction, sigUpIsEorrAction, signUpResetAction} = signUpSlice.actions
export const signUpEmailValueFromRduxStore = (state: RootState) => state.signUp.email;
export const signUpPasswordValueFromRduxStore = (state: RootState) => state.signUp.password;
export const signUpLoadingValueFromReduxStore = (state: RootState) => state.signUp.isLoading;
export const signUpErrorValueFromReduxStore = (state: RootState) => state.signUp.isError;


export default signUpSlice.reducer