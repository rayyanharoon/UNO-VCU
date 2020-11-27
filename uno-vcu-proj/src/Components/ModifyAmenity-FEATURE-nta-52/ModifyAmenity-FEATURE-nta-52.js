import React, {Component} from 'react';
import ReactDOM, {Route} from 'react-router-dom';


class ModifyAmenity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getAmenity = () => {
        console.log("Get Amenity called!");
        fetch("http://localhost:8000", 
        {method: "GET"})
        .then(response => response.json())
        .then(data => this.setState({"data": data}))
    }

//     addAmenity = () => {
//         console.log("Added Amenity!");
//         var addRmNum = document.getElementById('rmnum').value;
//         //var addRmType = document.getElementById('rmtype').value;
//         var addAmenityType = document.getElementById('amenity').value;
//         fetch('http://localhost:8000', 
//         {method: "POST", 
//         headers: {"Content-Type": "application/json"}, 
//         body: addRmNum, addAmenityType
//     })
//     .then(response => response.json)
//     .then(data => this.setState({"data": data}))
// }

    updateAmenity = () => {
        console.log("Updated Amenity!");
        var updateAmenityType = document.getElementById('amenityType').value;
        fetch("http://localhost:8000", 
        {method: "PUT", 
        headers: {'Content-type':'application/json'}, 
        body: updateAmenityType
    })
    .then(response => response.json)
    .then(data => this.setState({"data": data}));
}

    render(){
        return (
            <div className='App'>
            <h1>Modify Amenity</h1>
            Room Number: <input type='text' id='rmnum' onChange={this.showrmnumber}/><br/>
            {/* Room type: <input type='text' id='rmtype' onChange={this.showrmtype}/><br/> */}
            Amenity: <select onChange={this.updateAmenity} id='amenityType'>
                <option value="none">None</option>
                <option value="pool access">Pool Access</option>
                <option value="gym access">Gym Access</option>
                <option value="laundry room access">Laundry Room Access</option>
                <option value="all inclusions">All Inclusions</option>
                    </select><br/>

            <button type="submit" onClick={this.getAmenity}>Get Room</button>
            {/* <button type="submit" onClick={this.addAmenity}>Add Amenity</button> */}
            <button type="submit" onClick={this.updateAmenity}>Update Amenity</button>
          </div>
        )
    }

}

export default ModifyAmenity;