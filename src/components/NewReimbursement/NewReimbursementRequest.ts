import { Project0Client } from "../../Remote/Project0Client"
import { TokenExpiredError } from "../Errors/TokenExpiredError"
import { InternalServiceError } from "../Errors/InternalServiceError"



export async function NewReimbursementRequest(author:number,amount:number,dateSubmitted:number,description:string,type:number){
    let newReimbursement = {
        author,
        amount,
        dateSubmitted,
        description,
        type
    }

    try {
        let res = await Project0Client.post("/reimbursements",newReimbursement)
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