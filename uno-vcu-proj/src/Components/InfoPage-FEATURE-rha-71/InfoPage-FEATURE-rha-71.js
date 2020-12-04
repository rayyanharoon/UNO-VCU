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
                <p><b>Hello, and welcome! This is the official site for Room Booking at VCU.</b> <br></br>Students and professors attending the current semester at VCU are able to view and book the available rooms offered here.</p>
                <h2>Click here to begin browsing our rooms!</h2>
                <Link to="/BookRooms-rha-71"><button type="button" class="btn btn-success btn-lg">Apply!</button></Link>
                <br></br>
                <br></br>
                <h3><b>FAQ</b></h3>
                <p class="text-md-left"><b>What kind of rooms does VCU offer? </b>We offer a variety of rooms, ranging in prices and sizes! You will find something that you will enjoy, absolutely guaranteed.<br></br><b>Are the amenities luxurious? </b>The amenities provided at VCU are maintained to the highest standard, providing students with a relaxing experience throughout the busy semester.</p>
                <br></br>
                <h3><b>Reviews</b></h3>
                <p class="text-md-left"><b>★★★★★</b><br></br><i>"The best school with the best rooms!"</i><br></br>Shellisa Joice, VCU Alumni</p>
                <p class="text-md-center"><b>★★★★★</b><br></br><i>"The rooms and amenities quality is impeccable"</i><br></br>Bob Duncan, 1234 Biology Prof</p>
                <p class="text-md-right"><b>★★★★★</b><br></br><i>"The best school with the best rooms!"</i><br></br>Blue Ivy Carter, 2020-2021 Student</p>
            </div>  
            )
        
    }
}

export default InfoPage;