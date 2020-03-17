import { IState } from "../../Reducers"
import { ReimbursementByStatusActionMapper } from "../../ActionMappers/ReimbursementByStatusAM"
import { ReimbursementByStatusComponent } from "./ReimbursementByStatusComponent"
import { connect } from "react-redux"


const mapStateToProps = (state:IState) =>{
    return {
        reimbursement:state.reimbursementByStatus.reimbursementByStatus,
        currentUser:state.login.user,
        errorMessage:state.reimbursementByStatus.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    ReimbursementByStatusActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByStatusComponent)