import { Dispatch } from "redux"
import { UpdateUserRequest } from "../components/UpdateUser/UpdateUserRequest"
import { UserNotFoundError } from "../components/Errors/UserNotFoundError"


export const usersUpdateTypes = {
    SUCCESSFUL_USER_UPDATE: 'PROJECT-1_SUCCESSFUL_USER_UPDATE',
    USER_NOT_FOUND_USER_UPDATE:'PROJECT-1_USER_NOT_FOUND_USER_UPDATE',
    UPDATE_USER_INTERNAL_SERVER_ERROR:'UPDATE_USER_INTERNAL_SERVER_ERROR'
}



export const UpdateUserActionMapper = (userId:number,username:string,password:string,firstName:string,lastName:string,email:string) => async (dispatch:Dispatch) => {
  
    try{
         let updatedUser = await UpdateUserRequest(userId,username,password,firstName,lastName,email)
        //if we do call dispatch with those users
        if (updatedUser.status === 404){
            throw new UserNotFoundError()
        }
        dispatch({
            type: usersUpdateTypes.SUCCESSFUL_USER_UPDATE,
            payload:{
                updatedUser
            }
        })
    } catch (e){
            if(e.status === 404){
                dispatch({
                    type:usersUpdateTypes.USER_NOT_FOUND_USER_UPDATE
            })
        }
            else{
        dispatch({
            type:usersUpdateTypes.UPDATE_USER_INTERNAL_SERVER_ERROR
        })
    }
    }
    //function completes
}