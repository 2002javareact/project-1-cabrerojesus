import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  UsersByIdComponent from './components/UsersById/FindUserByIdContainer';
import  LoginComponent  from './components/Login/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomepageComponent  from './components/Homepage/HomepageComponent';
import DisplayAllUsersContainer from './components/DisplayAllUsers/DisplayAllUsersContainer';
import  ReimbursementByStatusComponent  from './components/ReimbursementsByStatus/ReimbursementByStatusContainer';
import  ReimbursementByAuthorComponent  from './components/ReimbursementByAuthor/ReimbursementByAuthorContainer';
import UpdateUserComponent  from './components/UpdateUser/UpdateUserContainer';
import UpdateReimbursementComponent  from './components/UpdateReimbursement/UpdateReimbursementContainer';
import  NewReimbursementComponent  from './components/NewReimbursement/NewReimbursementContainer';
import UserInfoComponent from './components/UserInfo/UserInfoContainer'




export class App extends React.Component<any,any> {
 
  render() { 
     return ( 
      <Provider store = {store}>    
        <div className="App">     
          <Router>  
            <Switch>
                <Route path = '/users/info' component={UserInfoComponent}/>                 
                <Route path = '/users/id' component ={UsersByIdComponent}/>  
                <Route path = '/homepage' component ={HomepageComponent}/> 
                <Route path = '/users' component = {DisplayAllUsersContainer}/> 
                <Route path = '/reimbursement/status' component = {ReimbursementByStatusComponent}/>  
                <Route path = '/reimbursement/author' component = {ReimbursementByAuthorComponent}/> 
                <Route path = '/update/user' component = {UpdateUserComponent}/> 
                <Route path = '/update/reimbursement' component = {UpdateReimbursementComponent}/>
                <Route path = '/new/reimbursement' component = {NewReimbursementComponent}/>
                <Route path='/' component = {LoginComponent}/>      
            </Switch>
          </Router>    
      </div>
    </Provider>  
  );
  }
}
 
export default App;
