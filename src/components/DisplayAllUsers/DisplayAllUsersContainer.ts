import { IState } from "../../Reducers";
import { getAllUsersActionMapper } from '../../ActionMappers/AllUsersAM'
import { connect } from "react-redux";
import { ViewAllUsersComponent } from "./DisplayAllUsers";


const mapStateToProps = (state:IState) => {
    return {
        allUsers: state.users.allUsers,
        errorMessage: state.users.errorMessage,
        currentUser: state.login.user
    }
}

const mapDispatchToProps = {
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)