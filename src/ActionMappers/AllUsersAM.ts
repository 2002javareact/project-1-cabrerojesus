import { Dispatch } from "redux";
import { FetchAllUsers } from "../components/DisplayAllUsers/FetchAllUsers";

export const usersTypes = {
    GET_ALL_USERS: 'PROJECT-1_GET_ALL_USERS',
    FAILED_TO_RETRIEVE_USERS:'PROJECT-1_FAILED_TO_RETRIEVE_USERS'
}



export const getAllUsersActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let usersArray = await FetchAllUsers()
        //if we do call dispatch with those users
        dispatch({
            type: usersTypes.GET_ALL_USERS,
            payload:{
                usersArray
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:usersTypes.FAILED_TO_RETRIEVE_USERS
        })
    }
    //function completes
}