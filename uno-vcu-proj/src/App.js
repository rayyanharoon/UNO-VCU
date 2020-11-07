<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages

// import MainPage from "./components/MainPage/MainPage"; //Rayyan's page should be main
// import NotFoundPage from "./components/404/404"
import Login from "./Components/Login-FEATURE-kzi-30/Login-FEATURE-kzi-30"



class App extends React.Component {
  render(){
    return <Router>
      <Switch>
        {/* add pages here */}
      {/* <Route exact path="/" component={Login}/> */}
      <Route exact path="/Login" component={Login}/>

      {/* just error pages */}
      <Route path="/404" component={NotFoundPage}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
  }
}


export default App;
=======

import React from 'react';
import './App.css';

import Registration from './Components/Registration/Registration';

var data={loginMsg: "You have successfully registered!"}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registrationForm: [{
        Firstname: "Isabel",
        Lastname: "Moner",
        Email: "isabelm@gmail.com",
        Password: "!hello123",
        ConfirmPassword: ""
      },
      {
        Firstname: "Ant",
        Lastname: "Nekton",
        Email: "antInTheDeep@anorrax.com",
        Password: "GoDeep47M",
        ConfirmPassword: ""
      },
      {
        Firstname: "Colleen",
        Lastname: "Hoover",
        Email: "hooverAuthor@gmail.com",
        Password: "Author:MaybeSomeday",
        ConfirmPassword: ""
      }]
    }
  }



  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Registration</h1>
        First Name: <input type='text'/><br/>
        Last Name: <input type='text'/><br/>
        Email: <input type='text'/><br/>
        Password: <input type='text'/><br/>
        Confirm Password: <input type='text'/><br/>
        <button type="submit" onClick={this.registerData}>Register</button>
        <Registration loginMsg={data.loginMsg}/>
      </div>
    );
  }
}
export default App;
>>>>>>> a7a72cead88b64a26bcef3f1d6ea62f5d60c5d34
