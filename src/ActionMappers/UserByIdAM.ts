import { Dispatch } from "redux";
import { FetchUserById } from '../components/UsersById/FetchUserById'

export const FindByUserIdTypes = {
    SUCCESSFUL : 'PROJECT-1-CABREROJESUS_FOUND_USER',
    USER_NOT_FOUND: 'PROJECT-1-CABREROJESUS_USER_NOT_FOUND',
    INTERNAL_SERVER: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const UserByIdActionMapper = (userId:number) => async  (dispatch:Dispatch) => {
    try{
        let user = await FetchUserById(userId)
        dispatch({
            type:  FindByUserIdTypes.SUCCESSFUL,
            payload:{
                user
            }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type:FindByUserIdTypes.USER_NOT_FOUND
            })
        }else {
            dispatch({
                type:FindByUserIdTypes.INTERNAL_SERVER
            })
        }
    }

}