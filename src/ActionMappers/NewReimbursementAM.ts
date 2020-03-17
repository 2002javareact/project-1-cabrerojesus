import { Dispatch } from "redux"
import { NewReimbursementRequest } from "../components/NewReimbursement/NewReimbursementRequest"


export const newReimbursementTypes = {
    SUCCESSFUL_REIMBURSEMENT_CREATION : 'PROJECT-1-CABREROJESUS_SUCCESSFUL_REIMBURSEMENT_CREATION',
    INTERNAL_SERVER_ERROR: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const NewReimbursementActionMapper = (author:number,amount:number,dateSubmitted:number,description:string,type:number) => async (dispatch:Dispatch) => {
   
    try{
        let createdReimbursement = await NewReimbursementRequest(author,amount,dateSubmitted,description,type)
        dispatch({
            type: newReimbursementTypes.SUCCESSFUL_REIMBURSEMENT_CREATION,
            payload:{
                createdReimbursement
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:newReimbursementTypes.INTERNAL_SERVER_ERROR
        })
    }
}
