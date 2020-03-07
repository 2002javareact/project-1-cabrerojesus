import { Users } from "../Models/Users";
import { TokenExpiredError } from "../Errors/TokenExpiredError";
import { UserNotFoundError } from "../Errors/UserNotFoundError";
import { InternalServiceError } from "../Errors/InternalServiceError";

export async function FetchUserById(userId:number|undefined):Promise<Users>{

    
    try{
        let response = await fetch('http://ec2-3-135-226-41.us-east-2.compute.amazonaws.com:2020/users/id', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)

        })
        console.log(response);

        if(response.status === 401){
            throw new TokenExpiredError()
        }

        return await response.json()
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
}//end of class
