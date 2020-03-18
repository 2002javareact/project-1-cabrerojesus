import { BadCredentialsError } from "../Errors/BadCredentialsError";
import { InternalServiceError } from "../Errors/InternalServiceError";
import { Users } from  "../Models/Users";
import { Project0Client } from "../../Remote/Project0Client"



export async function LoginFetch(username: string, password: string):Promise<Users> {
    let credentials = {
        username,
        password
    }

    try {
        let res = await Project0Client.post("/users/login",credentials)
        if(res.status === 401){
            throw new BadCredentialsError()
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