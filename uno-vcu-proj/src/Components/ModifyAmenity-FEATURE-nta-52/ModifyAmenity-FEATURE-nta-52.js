import React, {Component} from 'react';
import ReactDOM, {Route} from 'react-router-dom';

class ModifyAmenity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className='App'>
            <h1>Modify Amenity</h1>
            Room Number: <input type='text' onChange={this.showrmnumber}/><br/>
            Room type: <input type='text' onChange={this.showrmtype}/><br/>
            Amenity: <select onChange={this.updateAmenity}>
                <option value="none">None</option>
                <option value="pool access">Pool Access</option>
                <option value="gym access">Gym Access</option>
                <option value="laundry room access">Laundry Room Access</option>
                <option value="all inclusions">All Inclusions</option>
                    </select><br/>
            

            <button type="submit" onClick={this.getAmenity}>Get Room</button>
            <button type="submit" onClick={this.addAmenity}>Add Amenity</button>
            <button type="submit" onClick={this.updateAmenity}>Update Amenity</button>
    
           
          </div>
        )
    }

}












export default ModifyAmenity;