import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages

import MainPage from "./Components/MainPage-FEATURE-rha-71/MainPage-FEATURE-rha-71";
import NotFoundPage from "./Components/404Page-FEATURE-kzi-30/404Page-FEATURE-kzi-30"
import Login from "./Components/Login-FEATURE-kzi-30/Login-FEATURE-kzi-30"
import Register from "./Components/Registration-FEATURE-nta-52/Registration-FEATURE-nta-52";
import ModifyRoom from "./Components/ModifyRoom-FEATURE-kzi-30/ModifyRoom-FEATURE-kzi-30";
import ModifyAmenity from "./Components/ModifyAmenity-FEATURE-nta-52/ModifyAmenity-FEATURE-nta-52"
import BookRooms from "./Components/BookRooms-FEATURE-rha-71/BookRooms-FEATURE-rha-71"


class App extends React.Component {
  render(){
  
    return <Router>
      <Switch>
        {/* add pages here */}
      {/* <Route exact path="/" component={MainPage}/> */}
      <Route exact path="/Login-kzi-30" component={Login}/>
      <Route exact path="/Registration-nta-52" component={Register}/>
      <Route exact path="/ModifyRoom-kzi-30" component={ModifyRoom}/>
      <Route exact path="/ModifyAmenity-nta-52" component={ModifyAmenity}/>
      <Route exact path="/BookRooms-rha-71" component={BookRooms}/>
      <Route exact path="/MainPage-rha-71" component={MainPage}/>


      {/* just error pages */}
      <Route path="/404" component={NotFoundPage}/>
      {/* <Redirect to="/404"/> */}
      </Switch>
    </Router>
  }
}


export default App;
