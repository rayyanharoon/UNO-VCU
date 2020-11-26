import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class AdminView extends Component {
    render() {
        <div className="App">
            <h1>Admin Modification Select:</h1>
            <br></br>
            <Link to="/ModifyRoom"><button type="button">Modify Rooms</button></Link>
            <Link to="/ModifyAmenity"><button type="button">Modify Amenities</button></Link>
        </div>
    }
}

export default AdminView;