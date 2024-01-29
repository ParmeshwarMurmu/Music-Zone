
import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from '../SignUpReducer/reducer';
import loginReducer from '../LoginReducer/reducer'

export const store = configureStore({
    reducer: {
      signUp: signUpReducer,
      login: loginReducer
    }
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

