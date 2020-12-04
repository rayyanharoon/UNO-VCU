import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class InfoPage extends Component {
    render() {
        return (
            <div className="app">
                <h1>Welcome To Vancouver Community University</h1>
                <br></br>
                <h2>Click here to begin browsing our rooms!</h2>
                <Link to="/BookRooms-rha-71"><button type="button" class="btn btn-primary btn-lg">Apply!</button></Link>
            </div>  
            )
        
    }
}

export default InfoPage;