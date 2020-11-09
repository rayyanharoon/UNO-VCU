import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages

// import MainPage from "./components/MainPage/MainPage"; //Rayyan's page should be main
import NotFoundPage from "./Components/404Page-FEATURE-kzi-30/404Page-FEATURE-kzi-30"
import Login from "./Components/Login-FEATURE-kzi-30/Login-FEATURE-kzi-30"
import Registration from "./Components/Registration-FEATURE-nta-52/Registration-FEATURE-nta-52";
import ModifyRoom from "./Components/ModifyRoom-FEATURE-kzi-30/ModifyRoom-FEATURE-kzi-30";


class App extends React.Component {
  render(){
    return <Router>
      <Switch>
        {/* add pages here */}
      {/* <Route exact path="/" component={MainPage}/> */}
      <Route exact path="/Login" component={Login}/>

      <Route exact path="/Registration" Component={Registration}/>
      <Route exact path="/ModifyRoom" Component={ModifyRoom}/>

      {/* just error pages */}
      <Route path="/404" component={NotFoundPage}/>
      {/* <Redirect to="/404"/> */}
      </Switch>
    </Router>
  }
}


export default App;
