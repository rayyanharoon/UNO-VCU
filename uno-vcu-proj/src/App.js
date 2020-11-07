import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages\
import MainPage from "./components/MainPage/MainPage";
import NotFoundPage from "./components/404/404"
import Login from "./components/Login/Login"



class App extends React.Component {
  render(){
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/Login" component={Login}/>


      <Route path="/404" component={NotFoundPage}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
  }
}


export default App;
