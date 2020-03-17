import { Dispatch } from "redux";
import { FetchReimbursementByStatus } from "../components/ReimbursementsByStatus/FetchReimbursementByStatus";

export const FindByReimbursementStatusTypes = {
    SUCCESSFUL_FOUND_REIMBURSEMENT_STATUS : 'PROJECT-1-CABREROJESUS_SUCCESSFUL',
    REIMBURSEMENT_NOT_FOUND: 'PROJECT-1-CABREROJESUS_REIMBURSEMENT_NOT_FOUND',
    INTERNAL_SERVER: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const ReimbursementByStatusActionMapper = (statusId:number) => async  (dispatch:Dispatch) => {
    try{
        let reimbursement = await FetchReimbursementByStatus(statusId)
        dispatch({
            type:  FindByReimbursementStatusTypes.SUCCESSFUL_FOUND_REIMBURSEMENT_STATUS,
            payload:{
                reimbursement
            }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type:FindByReimbursementStatusTypes.REIMBURSEMENT_NOT_FOUND
            })
        }else {
            dispatch({
                type:FindByReimbursementStatusTypes.INTERNAL_SERVER
            })
        }
    }

}