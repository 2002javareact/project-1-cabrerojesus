import axios from 'axios'
import { environment } from '../environment'

//set up our base environment for our webflicks connection
export const Project0Client = axios.create({
    baseURL:environment.project1BaseUrl, //the base network address with no URI's on 
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})