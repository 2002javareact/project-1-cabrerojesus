import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponents';
import { IState } from '../../Reducers';
import { connect } from 'react-redux';
import { Users } from '../Models/Users';
import { Redirect } from 'react-router';
import NBComponentFM from '../NavBar/NBComponentFM';
import NBUserComponent from '../NavBar/NBUserComponent';
import  UserInfoComponent  from '../UserInfo/UserInfoContainer';
import { Container } from 'reactstrap';


interface IHomepageProps{
    currentUser:Users
}
export class HomepageComponent extends React.Component<IHomepageProps,any>{
   

    render(){
        let loggedUser = this.props.currentUser
                if(loggedUser.username === ''){
                    return(
                        <Redirect to ='/'/>
                    )
                }
                else if(loggedUser.username !== '' && loggedUser.role.role === 'Admin'){
                    return(<> 
                              <Container>
                                <h3>Welcome to the Reimbursement System</h3>
                                    <UserInfoComponent/>
                                    <NavBarComponent/>
                             </Container>
                           </>   
                        )
                    }
                    else if(loggedUser.username !== '' && loggedUser.role.role === 'Financial Manager'){
                        return(
                            <> 
                              <Container>
                                <h3>Welcome to the Reimbursement System</h3>
                                    <UserInfoComponent/>
                                    <NBComponentFM/>
                             </Container>
                           </>  
                        )
                    }
                    else if(loggedUser.username !== '' && loggedUser.role.role === 'User'){
                        return(
                            <> 
                              <Container>
                                <h3>Welcome to the Reimbursement System</h3>
                                    <UserInfoComponent/>
                                    <NBUserComponent/>
                             </Container>
                           </>  
                        )
                    }
                }
}
const mapStateToProps = (state:IState) =>{
    return {
        currentUser:state.login.user,
        errorMessage:state.login.errorMessage
    }
  }
  
  export default connect(mapStateToProps)(HomepageComponent)