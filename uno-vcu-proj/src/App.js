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
