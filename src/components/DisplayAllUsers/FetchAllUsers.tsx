import { Project0Client } from "../../Remote/Project0Client";
import { UserNotFoundError } from "../Errors/UserNotFoundError";
import { InternalServiceError } from "../Errors/InternalServiceError";




export const FetchAllUsers = async ()=>{
        let allUsers = await Project0Client.get('/users')
        if(allUsers.status === 200){
            return allUsers.data
        }
        else if(allUsers.status === 404){
            throw new UserNotFoundError()
        }
        else{
            throw new InternalServiceError()
        }
    }