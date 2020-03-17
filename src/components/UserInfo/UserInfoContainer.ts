  
import { connect } from "react-redux";
import { UserInfoComponent } from "./UserInfo";
import { IState } from "../../Reducers";



const mapStateToProps = (state:IState) => {
    return {
        currentUser: state.login.user
    }
}

export default connect(mapStateToProps)(UserInfoComponent)