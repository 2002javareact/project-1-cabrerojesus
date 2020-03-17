import { IState } from "../../Reducers"
import { UpdateUserActionMapper } from "../../ActionMappers/UpdateUserActionMapper"
import { connect } from "react-redux"
import { UpdateUserComponent } from "./UpdateUser"



const mapStateToProps = (state:IState) =>{
    return {
        updatedUser:state.updateUser.updatedUser,
        currentUser:state.login.user,
        errorMessage:state.updateUser.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UpdateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserComponent)