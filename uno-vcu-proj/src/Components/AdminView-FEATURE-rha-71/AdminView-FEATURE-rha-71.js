import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminView extends Component {
    render() {
        return (
            <div className="App">
            <h1>Admin Modification Select:</h1>
            <br></br>
            <Link to="/ModifyRoom-kzi-30"><button type="button">Modify Rooms</button></Link>
            <Link to="/ModifyAmenity-nta-52"><button type="button">Modify Amenities</button></Link>
        </div>
        )
        
    }
}

export default AdminView;