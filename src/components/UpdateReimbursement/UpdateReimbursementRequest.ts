import { Project0Client } from "../../Remote/Project0Client"
import { TokenExpiredError } from "../Errors/TokenExpiredError"
import { InternalServiceError } from "../Errors/InternalServiceError"

export async function UpdateReimbursementRequest(reimbursementId:number,amount:number,dateResolved:number,description:string,resolver:number,status:number,type:number){
    let reimbursementToUpdate = {
        reimbursementId,
        amount,
        dateResolved,
        description,
        resolver,
        status,
        type
    }

    try {
        let res = await Project0Client.patch('/reimbursements/users',reimbursementToUpdate)
        if(res.status === 400){
            throw new TokenExpiredError()
        }        
            return res.data        
    } 
    catch (e) {
        if(e.status === 400){
            throw e
        } 
        else{
            throw new InternalServiceError()
        }
    }
}