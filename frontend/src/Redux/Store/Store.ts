import { applyMiddleware, combineReducers, Middleware, Reducer, StoreEnhancer} from "redux";
import { ThunkMiddleware, thunk } from "redux-thunk";
import { reducer as SignUpReducer, signUp } from "../SignUpReducer/reducer";
import { userEmailActionType, userNameActionType, userPasswordActionType } from "../SignUpReducer/action";


// Define the root state type
export interface RootState {
    SignUpReducer: RootAction
    // Add other reducers and their states if needed
}


// Define the root action type
export type RootAction =
    | userNameActionType
    | userPasswordActionType
    | userEmailActionType
// Add other action types if needed

// const rootReducer: Reducer<RootState, RootAction> = combineReducers({
//     SignUpReducer

// })

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
    SignUpReducer: SignUpReducer as Reducer<signUp, RootAction>,
});

// Define thunk middleware type
const thunkMiddleware: ThunkMiddleware<RootState, RootAction> = thunk;

// Define other middlewares if needed
const middlewares: Middleware[] = [thunkMiddleware];

const enhancers: StoreEnhancer<{}, {}>[] = [];

export const store = createStore(rootReducer, {}, applyMiddleware(...middlewares, thunk), ...enhancers)







