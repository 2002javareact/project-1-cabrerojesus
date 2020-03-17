import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { Users } from "../components/Models/Users";
import { usersReducer } from "./AllUsersReducer";
import { findByUserIdReducer } from "./FindByUserIdReducer";
import { Reimbursement } from "../components/Models/Reimbursement";
import { findReimbursementByStatusReducer } from "./FindReimbursementByStatusReducer";
import { findReimbursementByAuthorReducer } from "./FindReimbursementByAuthorReducer";
import { updateUserReducer } from "./UpdateUserReducer";
import { updateReimbursementReducer } from "./ReimbursementUpdateReducer";
import { newReimbursementReducer } from "./NewReimbursementReducer";

//make interfaces for each "piece" of state
export interface ILoginState{
    user:Users
    errorMessage:string
}
export interface IFindByUserIdState{
    userById:Users
    errorMessage:string
}
export interface IFindReimbursementByStatusIdState{
    reimbursementByStatus:Reimbursement[]
    errorMessage:string
}
export interface IFindReimbursementByAuthorState{
    reimbursementByAuthor:Reimbursement[]
    errorMessage:string
}
export interface IUsersState{
    allUsers:Users[]
    errorMessage:string
}
export interface IUpdateUserState{
    updatedUser:Users
    errorMessage:string
}
export interface IUpdateReimbursementState{
    updatedReimbursement:Reimbursement
    errorMessage:string
}
export interface INewReimbursementState{
    newReimbursement:Reimbursement
    errorMessage:string
}
//define all of the pieces of state
export interface IState{
    login:ILoginState
    users:IUsersState
    userId:IFindByUserIdState
    reimbursementByStatus:IFindReimbursementByStatusIdState
    reimbursementByAuthor:IFindReimbursementByAuthorState
    updateUser:IUpdateUserState
    updateReimbursement:IUpdateReimbursementState
    newReimbursement:INewReimbursementState
}
//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    login: loginReducer,
    users: usersReducer,
    userId: findByUserIdReducer,
    reimbursementByStatus: findReimbursementByStatusReducer,
    reimbursementByAuthor: findReimbursementByAuthorReducer,
    updateUser: updateUserReducer,
    updateReimbursement: updateReimbursementReducer,
    newReimbursement: newReimbursementReducer,
})