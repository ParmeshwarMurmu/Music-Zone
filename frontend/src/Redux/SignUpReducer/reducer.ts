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
        increment: state => {
            state.value += 1
          },
          decrement: state => {
            state.value -= 1
          },
          // Use the PayloadAction type to declare the contents of `action.payload`
          incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
          }
    }
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer