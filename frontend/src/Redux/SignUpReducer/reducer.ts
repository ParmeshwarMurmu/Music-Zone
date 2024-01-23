// import { USER_EMAIL, USER_NAME, USER_PASSWORD, userEmailActionType, userNameActionType, userPasswordActionType } from "./action"

// export interface signUp {
//     userName: string,
//     userEmail: string,
//     userPassword: string
// }

// const initialState: signUp = {
//     userName: '',
//     userEmail: '',
//     userPassword: ''
// }

// type ActionTypes = 
//   | userNameActionType
//   | userEmailActionType
//   | userPasswordActionType
// //                                                          ({ type: string, payload: string })
// export const reducer = (state: signUp = initialState, action: ActionTypes): signUp => {
//     switch (action.type) {

//         case USER_NAME:
//             return { ...state, userName: action.payload }


//         case USER_EMAIL:
//             return { ...state, userEmail: action.payload }

//         case USER_PASSWORD:
//             return { ...state, userPassword: action.payload }

            
//         default:
//             return {...state}
//     }
// }