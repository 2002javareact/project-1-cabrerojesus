import { Dispatch } from "redux";
import { LoginFetch } from "../components/Login/LoginFetch";

export const loginTypes = {
    SUCCESSFUL_LOGIN : 'PROJECT-1-CABREROJESUS_SUCCESSFUL_LOGIN',
    INVALID_CREDENTIALS: 'PROJECT-1-CABREROJESUS_INVALID_CREDENTIALS',
    INTERNAL_SERVER: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}


//an action object is a simple object
// it has two fields one of which is optional
// it has a mandatory type and an optional payload

//this pattern of function is called a thunk
// that is a function that immediately returns another function
export const LoginActionMapper = (username:string, password:string) => async  (dispatch:Dispatch) => {
    try {
        let loggedUser = await LoginFetch(username,password)
        dispatch({
          type:  loginTypes.SUCCESSFUL_LOGIN,
          payload:{
              loggedUser
          }
        })
    }catch(e){
        if(e.status === 400){
            dispatch({
                type:loginTypes.INVALID_CREDENTIALS
            })
        }else {
            dispatch({
                type:loginTypes.INTERNAL_SERVER
            })
        }
    }

}