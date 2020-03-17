import { Dispatch } from "redux"
import { UpdateReimbursementRequest } from "../components/UpdateReimbursement/UpdateReimbursementRequest"

export const updateReimbursementTypes = {
    SUCCESSFUL_REIMBURSEMENT_UPDATE: 'PROJECT-1-CABREROJESUS_SUCCESSFUL',
    INTERNAL_SERVER_ERROR: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const UpdateReimbursementActionMapper = (reimbursementId:number,amount:number,dateResolved:number,description:string,resolver:number,status:number,type:number) => async (dispatch:Dispatch) => {
   

    try{
         let updatedReimbursement = await UpdateReimbursementRequest(reimbursementId,amount,dateResolved,description,resolver,status,type)
        //if we do call dispatch with those users
        dispatch({
            type: updateReimbursementTypes.SUCCESSFUL_REIMBURSEMENT_UPDATE,
            payload:{
                updatedReimbursement
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:updateReimbursementTypes.INTERNAL_SERVER_ERROR
        })
    }
}
