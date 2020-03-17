import { IUpdateUserState } from "."
import { Role } from "../components/Models/Role"
import { Users } from "../components/Models/Users"
import { AnyAction } from "redux"
import { usersUpdateTypes } from "../ActionMappers/UpdateUserActionMapper"

export const initialState:IUpdateUserState = {
    updatedUser: new Users(0,'','','','','',new Role(0,'')),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const updateUserReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case usersUpdateTypes.SUCCESSFUL_USER_UPDATE:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                updatedUser: action.payload.updatedUser,
                errorMessage:''            }
       }
        case usersUpdateTypes.UPDATE_USER_INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:'Did not update'
            }
        }
        default:
            return state;
    }
}
