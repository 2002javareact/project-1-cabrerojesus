import { Users } from "../components/Models/Users"
import { IFindByUserIdState } from "."
import { Role } from "../components/Models/Role"
import { AnyAction } from "redux"
import { FindByUserIdTypes } from "../ActionMappers/UserByIdAM"






export const initialState:IFindByUserIdState = {
    userById: new Users(0,'','','','','',new Role(0,'')),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const findByUserIdReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case FindByUserIdTypes.SUCCESSFUL:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                userById: action.payload.user,
                errorMessage: 'User found'
            }
       }
        case FindByUserIdTypes.USER_NOT_FOUND:{
            return {
                ...state,
                errorMessage:'User not found'
            }
        }
        case FindByUserIdTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Something went wrong. Oops!'
            }
        }
        default:
            return state;
    }
}
