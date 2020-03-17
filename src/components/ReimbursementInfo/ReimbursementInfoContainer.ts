import { ReimbursementInfoComponent } from "./ReimbursementInfo"
import { IState } from "../../Reducers"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        newReimbursement:state.newReimbursement.newReimbursement
    }
}

export default connect(mapStateToProps)(ReimbursementInfoComponent)