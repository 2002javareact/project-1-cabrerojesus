import { IFindReimbursementByAuthorState } from "."
import { AnyAction } from "redux"
import { FindByReimbursementAuthorTypes } from "../ActionMappers/ReimbursementByAuthorAM"


export const initialState:IFindReimbursementByAuthorState = {
    reimbursementByAuthor:[],
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const findReimbursementByAuthorReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case FindByReimbursementAuthorTypes.FOUND_REIMBURSEMENT_AUTHOR:{

            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                reimbursementByAuthor: action.payload.reimbursement,
                errorMessage:'Reimbursements By Author'
            }
       }
        case FindByReimbursementAuthorTypes.REIMBURSEMENT_NOT_FOUND:{
            return {
                ...state,
                errorMessage:'Reimbursement not found'
            }
        }
        case FindByReimbursementAuthorTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Something went wrong. Oops!'
            }
        }
        default:
            return state;
    }
}
