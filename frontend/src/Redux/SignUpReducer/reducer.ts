import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/Store'



// Defined type for the slice state
interface SignUpState {
    email: string,
    password: string
}

// Defined the initial state using above interface

const initialState: SignUpState = {
    email: '',
    password: ''
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,

    reducers:{
        
        signUpEmailAction: (state, action: PayloadAction<string>)=>{
            state.email = action.payload
        },

        signUpPasswordAction: (state, action: PayloadAction<string>)=>{
            state.password = action.payload
        }
    }
})


export const {signUpEmailAction, signUpPasswordAction} = signUpSlice.actions
export const signUpEmailValueFromRduxStore = (state: RootState) => state.signUp.email;
export const signUpPasswordValueFromRduxStore = (state: RootState) => state.signUp.password;

export default signUpSlice.reducer