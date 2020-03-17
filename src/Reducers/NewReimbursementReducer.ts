import { AnyAction } from "redux"
import { INewReimbursementState } from "."
import { Reimbursement } from "../components/Models/Reimbursement"
import { newReimbursementTypes } from "../ActionMappers/NewReimbursementAM"

export const initialState:INewReimbursementState = {
    newReimbursement: new Reimbursement(0,0,0,0,0,'',0,0,0),
    errorMessage:''
}

export const newReimbursementReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case newReimbursementTypes.SUCCESSFUL_REIMBURSEMENT_CREATION:{
            // if you do not return a new object
            //react will not trigger a render
            return { 
                ...state,
                newReimbursement: action.payload.createdReimbursement,
                errorMessage:'Reimbursement Created'
                           
            }
       }
        case newReimbursementTypes.INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:''
            }
        }
        default:
            return state;
    }
}
