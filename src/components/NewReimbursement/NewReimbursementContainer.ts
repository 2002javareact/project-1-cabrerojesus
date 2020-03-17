import { IState } from "../../Reducers"
import {  NewReimbursementActionMapper } from "../../ActionMappers/NewReimbursementAM"
import { connect } from "react-redux"
import { NewReimbursementComponent } from "./NewReimbursement"


const mapStateToProps = (state:IState) =>{
    return {
        newReimbursement:state.newReimbursement.newReimbursement,
        currentUser:state.login.user,
        errorMessage:state.newReimbursement.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    NewReimbursementActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(NewReimbursementComponent)