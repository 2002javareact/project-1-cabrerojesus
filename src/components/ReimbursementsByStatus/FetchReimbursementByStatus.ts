import { Reimbursement } from "../Models/Reimbursement"
import { Project0Client } from "../../Remote/Project0Client"
import { UserNotFoundError } from "../Errors/UserNotFoundError";
import { InternalServiceError } from "../Errors/InternalServiceError";
import { TokenExpiredError } from "../Errors/TokenExpiredError";

export async function FetchReimbursementByStatus(statusId:number):Promise<Reimbursement> {
try{
    let res = await Project0Client.get(`/reimbursements/status/${statusId}`)
    console.log(res.data)
    if(res.status === 401){
        throw new TokenExpiredError()
    }
    return res.data
} catch (e) {
    if(e.status === 401){
        throw e
    } else if(e.status === 404){
        throw new UserNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}
}