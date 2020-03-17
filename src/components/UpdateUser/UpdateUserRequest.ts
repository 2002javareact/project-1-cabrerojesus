import { Project0Client } from "../../Remote/Project0Client"
import { TokenExpiredError } from "../Errors/TokenExpiredError"
import { InternalServiceError } from "../Errors/InternalServiceError"




export async function UpdateUserRequest(userId:number,username: string, password: string,firstName:string,lastName:string,email:string){
    
    try {
        let res = await Project0Client.patch('/users',{userId,username,password,firstName,lastName,email})
        
        if(res.status === 400){
            throw new TokenExpiredError()
        }else if(res.status === 200){
            console.log('Successful Update')
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