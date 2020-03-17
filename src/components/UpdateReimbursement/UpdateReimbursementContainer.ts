import { IState } from "../../Reducers"
import { UpdateReimbursementActionMapper } from "../../ActionMappers/UpdateReimbursementAM"
import { connect } from "react-redux"
import { UpdateReimbursementComponent } from "./UpdateReimbursementComponent"

const mapStateToProps = (state:IState) =>{
    return {
        updatedReimbursement:state.updateReimbursement.updatedReimbursement,
        currentUser:state.login.user,
        errorMessage:state.updateReimbursement.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UpdateReimbursementActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UpdateReimbursementComponent)