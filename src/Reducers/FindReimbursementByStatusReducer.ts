import { AnyAction } from "redux"
import { IFindReimbursementByStatusIdState } from "."
import { FindByReimbursementStatusTypes } from "../ActionMappers/ReimbursementByStatusAM"

export const initialState:IFindReimbursementByStatusIdState = {
    reimbursementByStatus:[],
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const findReimbursementByStatusReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case FindByReimbursementStatusTypes.SUCCESSFUL_FOUND_REIMBURSEMENT_STATUS:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                reimbursementByStatus:action.payload.reimbursement,
                errorMessage:'Reimbursements By Status'
                
            }
       }
        case FindByReimbursementStatusTypes.REIMBURSEMENT_NOT_FOUND:{
            return {
                ...state,
                errorMessage:'Reimbursement not found'
            }
        }
        case FindByReimbursementStatusTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Something went wrong. Oops!'
            }
        }
        default:
            return state;
    }
}
