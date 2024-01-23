import { applyMiddleware, combineReducers,createStore,  Middleware, Reducer, StoreEnhancer} from "redux";
import { ThunkMiddleware, thunk } from "redux-thunk";
// import { reducer as SignUpReducer } from "../SignUpReducer/reducer";
import { userEmailActionType, userNameActionType, userPasswordActionType } from "../SignUpReducer/action";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
    //   signUp: SignUpReducer,
    }
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// // Define the root state type
// export interface RootState {
//     SignUpReducer: signUp;
//     // Add other reducers and their states if needed
// }

// // Define the root action type
// export type RootAction =
//     | userNameActionType
//     | userPasswordActionType
//     | userEmailActionType;
// // Add other action types if needed

// const rootReducer = combineReducers({
//     SignUpReducer,
// });
