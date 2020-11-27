import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages
import MainPage from "./Components/MainPage-FEATURE-rha-71/MainPage-FEATURE-rha-71";
import NotFoundPage from "./Components/404Page-FEATURE-kzi-30/404Page-FEATURE-kzi-30"
import Login from "./Components/Login-FEATURE-kzi-30/Login-FEATURE-kzi-30"
import Register from "./Components/Registration-FEATURE-nta-52/Registration-FEATURE-nta-52";
import BookRooms from "./Components/BookRooms-FEATURE-rha-71/BookRooms-FEATURE-rha-71"
import ModifyRoom from "./Components/ModifyRoom-FEATURE-kzi-30/ModifyRoom-FEATURE-kzi-30";
import ModifyAmenity from "./Components/ModifyAmenity-FEATURE-nta-52/ModifyAmenity-FEATURE-nta-52"
import WaitList from './Components/Waitlist-FEATURE-kzi-30/Waitlist-FEATURE-kzi-30';
import AdminView from "./Components/AdminView-FEATURE-rha-71/AdminView-FEATURE-rha-71";
import NavBar from './Components/NavBar-FEATURE-kzi-30/NavBar-FEATURE-kzi-30'
import PageFooter from './Components/PageFooter-FEATURE-kzi-30/PageFooter-FEATURE-kzi-30'
import WaitlistView from './Components/WaitlistView-FEATURE-nta-52/WaitlistView-FEATURE-nta-52';

class App extends React.Component {
  render(){
  
    return( 
      <div className="App">
  
      <Router>
        <NavBar/>
        <Switch>
        {/* add pages here */}
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/Login-kzi-30" component={Login}/>
      <Route exact path="/Registration-nta-52" component={Register}/>
      <Route exact path="/ModifyRoom-kzi-30" component={ModifyRoom}/>
      <Route exact path="/ModifyAmenity-nta-52" component={ModifyAmenity}/>
      <Route exact path="/BookRooms-rha-71" component={BookRooms}/>
      <Route exact path="/Waitlist-kzi-30" component={WaitList}/>
      <Route exact path="/AdminView-rha-71" component={AdminView}/>
      <Route exact path="/WaitlistView-nta-52" component={WaitlistView}/>


      {/* just error pages */}
      <Route path="/404" component={NotFoundPage}/>
      {/* <Redirect to="/404"/> */}
      </Switch>
      <PageFooter/>
    </Router>
    </div>)
  }
}


export default App;
