import { Reimbursement } from "../components/Models/Reimbursement"
import { AnyAction } from "redux"
import { updateReimbursementTypes } from "../ActionMappers/UpdateReimbursementAM"
import { IUpdateReimbursementState } from "."

export const initialState:IUpdateReimbursementState = {
    updatedReimbursement: new Reimbursement(0,0,0,0,0,'',0,0,0),
    errorMessage:''
}

export const updateReimbursementReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case updateReimbursementTypes.SUCCESSFUL_REIMBURSEMENT_UPDATE:{
            // if you do not return a new object
            //react will not trigger a render
            console.log('in updateReimbursement')
            return {
                ...state,
                updatedReimbursement:action.payload.updatedReimbursement,
                errorMessage:'Reimbursement Updated'        
            }
       }
        case updateReimbursementTypes.INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:''
            }
        }
        default:
            return state;
    }
}
