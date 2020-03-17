import { ILoginState } from "."
import { loginTypes } from "../ActionMappers/LoginAM"
import { AnyAction } from "redux"
import { Users } from "../components/Models/Users"
import { Role } from "../components/Models/Role"

// we set the initial state for the "piece"
export const initialState:ILoginState = {
    user: new Users(0,'','','','','',new Role(3,'')),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const loginReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case loginTypes.SUCCESSFUL_LOGIN:{
            // if you do not return a new object
            //react will not trigger a render
         
            return {
                ...state,
                user: action.payload.loggedUser,
                errorMessage:'Login Successful' 
             }
       }
        case loginTypes.INVALID_CREDENTIALS:{
            return {
                ...state,
                errorMessage:'Username or Password Incorrect'
            }
        }
        case loginTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Something went wrong. Oops!'
            }
        }
        default:
            return state;
    }
}

