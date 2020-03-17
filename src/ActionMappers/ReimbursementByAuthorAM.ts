import { Dispatch } from "redux"
import { FetchReimbursementByAuthor } from "../components/ReimbursementByAuthor/FetchReimbursementByAuthor"

export const FindByReimbursementAuthorTypes = {
    FOUND_REIMBURSEMENT_AUTHOR : 'PROJECT-1-CABREROJESUS_SUCCESSFUL',
    REIMBURSEMENT_NOT_FOUND: 'PROJECT-1-CABREROJESUS_REIMBURSEMENT_NOT_FOUND',
    INTERNAL_SERVER: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const ReimbursementByAuthorActionMapper = (authorId:number) => async  (dispatch:Dispatch) => {
    try{
        let reimbursement = await FetchReimbursementByAuthor(authorId)
        dispatch({
            type:  FindByReimbursementAuthorTypes.FOUND_REIMBURSEMENT_AUTHOR,
            payload:{
                reimbursement
            }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type:FindByReimbursementAuthorTypes.REIMBURSEMENT_NOT_FOUND
            })
        }else {
            dispatch({
                type:FindByReimbursementAuthorTypes.INTERNAL_SERVER
            })
        }
    }

}