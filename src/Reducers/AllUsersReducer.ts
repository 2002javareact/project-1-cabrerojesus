import { IUsersState } from "./";
import { AnyAction } from "redux";
import { usersTypes } from "../ActionMappers/AllUsersAM";


const initialState:IUsersState = {
    allUsers:[],
    errorMessage:''
}

export const usersReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case usersTypes.GET_ALL_USERS:{
            return {
                ...state,
                allUsers: action.payload.usersArray,
                errorMessage: 'Users Displayed'
            }
        }  
        case usersTypes.FAILED_TO_RETRIEVE_USERS:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Users'
            }
        } 
        default:
            return state;
    }
}