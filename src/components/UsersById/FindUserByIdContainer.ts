import { IState } from "../../Reducers"
import { connect } from "react-redux"
import { UsersByIdComponent } from "./UsersById"
import { UserByIdActionMapper } from "../../ActionMappers/UserByIdAM"

const mapStateToProps = (state:IState) =>{
    return {
        userById:state.userId.userById,
        currentUser:state.login.user,
        errorMessage:state.userId.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UserByIdActionMapper
    
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UsersByIdComponent)