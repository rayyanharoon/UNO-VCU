import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class InfoPage extends Component {
    render() {
        return (
            <div className="app">
                <h1>Welcome To Vancouver Community University</h1>
                <h4>Student Today, Developer Tomorrow...</h4>
                <br></br>
                <p><b>Hello, and welcome! This is the official site for Room Booking at VCU.</b> <br></br>Students attending the current semester at VCU are able to view and book the available rooms offered here.</p>
                <h2>Click here to begin browsing our rooms!</h2>
                <Link to="/BookRooms-rha-71"><button type="button" class="btn btn-success btn-lg">Apply!</button></Link>
                <br></br>
                <br></br>
                <h3 class="text-justify">FAQ</h3>
                <p class="text-md-left"><b> What kind of rooms does VCU offer? </b>We offer a variety of rooms, ranging in prices and sizes!<br></br><b></b></p>
            </div>  
            )
        
    }
}

export default InfoPage;