import { Reimbursement } from "../Models/Reimbursement";
import { Project0Client } from "../../Remote/Project0Client";
import { TokenExpiredError } from "../Errors/TokenExpiredError";
import { UserNotFoundError } from "../Errors/UserNotFoundError";
import { InternalServiceError } from "../Errors/InternalServiceError";


export async function FetchReimbursementByAuthor(authorId:number):Promise<Reimbursement> {
    try{
        let res = await Project0Client.get(`/reimbursements/author/${authorId}`)
        console.log(res);
    
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