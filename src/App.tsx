import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginComponent } from './components/Login/Login';
import { UsersByIdComponent } from './components/UsersById/UsersById';
import { HomepageComponent } from './components/HomePage/HomepageComponent';

function App() {
  return (
    <div className="App">
          
      <Router>
        <Switch>   
            <Route path='/login' component={LoginComponent}/>     
            <Route path = '/users/id' component ={UsersByIdComponent}/>  
            <Route path = '/homepage' component = {HomepageComponent}/>         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
