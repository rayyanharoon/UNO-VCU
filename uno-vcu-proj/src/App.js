import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages

// import MainPage from "./components/MainPage/MainPage"; //Rayyan's page should be main
import NotFoundPage from "./component/404Page-FEATURE-kzi-30/404Page-FEATURE-kzi-30"
import Login from "./component/Login-FEATURE-kzi-30/Login-FEATURE-kzi-30"
import Register from "./component/Registration-FEATURE-nta-52/Registration-FEATURE-nta-52";
import ModifyRoom from "./component/ModifyRoom-FEATURE-kzi-30/ModifyRoom-FEATURE-kzi-30";


class App extends React.Component {
  render(){
  
    return <Router>
      <Switch>
        {/* add pages here */}
      {/* <Route exact path="/" component={MainPage}/> */}
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Registration" component={Register}/>
      <Route exact path="/ModifyRoom" component={ModifyRoom}/>


      {/* just error pages */}
      <Route path="/404" component={NotFoundPage}/>
      {/* <Redirect to="/404"/> */}
      </Switch>
    </Router>
  }
}


export default App;
