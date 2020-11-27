import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminView extends Component {
    render() {
        return (
            <div className="App">
            <h1>Welcome, Administrator.</h1>
            <h2>Please select what you would like to modify:</h2>
            <br></br>
            <Link to="/ModifyRoom-kzi-30"><button type="button" className="btn btn-secondary">Modify Rooms</button></Link>
            <Link to="/ModifyAmenity-nta-52"><button type="button" className="btn btn-secondary">Modify Amenities</button></Link>
        </div>
        )
        
    }
}

export default AdminView;