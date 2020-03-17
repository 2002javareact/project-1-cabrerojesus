import { IState } from "../../Reducers"
import { ReimbursementByAuthorActionMapper } from "../../ActionMappers/ReimbursementByAuthorAM"
import { connect } from "react-redux"
import { ReimbursementByAuthorComponent } from "./ReimbursementsByAuthor"
const mapStateToProps = (state:IState) =>{
    return {
        reimbursement:state.reimbursementByAuthor.reimbursementByAuthor,
        currentUser:state.login.user,
        errorMessage:state.reimbursementByAuthor.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    ReimbursementByAuthorActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByAuthorComponent)