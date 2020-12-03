import React from "react";
import {Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

// import Room from './Room';

class ModifyRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getRooms = () => {
        console.log("Get Rooms called");
        fetch('http://localhost:8000/modifyroom-kzi-30', {method: 'GET'})
        .then(response => response.json())
        .then(data => this.setState({"data" : data}))
    }

    addRoom = () => {
        console.log("Add Room called");
        var idToUpdate = document.getElementById("idInput").value
        var newType = document.getElementById("typeInput").value;
        var newMaxCapacity = document.getElementById("maxCapacityInput").value;
        var newStatus = document.getElementById("statusInput").value;
        fetch('http://localhost:8000/modifyroom-kzi-30',
        {
            method:'POST',
            headers:{'Content-type':'Application/json'},
            body: JSON.stringify({
                roomID : idToUpdate,
                roomType : newType,
                maxCapacity : newMaxCapacity,
                status : newStatus
            })
        })
        .then(response => response.json)
        .then(data => this.setState({"data":data}))
    }

    deleteRoom = () => {
        console.log("Delete Room called");
        var idToDelete = document.getElementById("idInput").value
        fetch('http://localhost:8000/modifyroom-kzi-30',{
            method: 'DELETE',
            headers: {'Content-Type':'Application/json'},
            body:JSON.stringify({
                roomID : idToDelete
            } )
        })
        .then(response => response.json)
        .then(data => this.setState({"data":data}));
    }

    updateRoom = () => {
        console.log("Update Room is called");
        var idToUpdate = document.getElementById("idInput").value
        var newType = document.getElementById("typeInput").value;
        var newMaxCapacity = document.getElementById("maxCapacityInput").value;
        var newStatus = document.getElementById("statusInput").value;

        fetch('http://localhost:8000/modifyroom-kzi-30', {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                roomID : idToUpdate,
                roomType : newType,
                maxCapacity : newMaxCapacity,
                status : newStatus
            })
        })
        .then(response => response.json)
        .then(data => this.setState({"data" : data}));
    }

    render(){
        return (
            <div>
            <h1>Modify Rooms</h1>
            <br/>
            <div>

            <br/>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Room ID Number" aria-label="roomID" aria-describedby="button-addon2" id="idInput"/>
            <div class="input-group-append">
            <button class="btn btn btn-danger" type="button" id="button-addon2" onClick={this.deleteRoom}>Delete</button>
            </div>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroupFileAddon01">Room Type:</span>
            <select class="custom-select" id="typeInput">
                <option selected>Choose...</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="economyDouble">Economy Double</option>
            </select>
            <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Options</label>
            </div>
            </div>
 
            
            {/* set to read only and update on change of room type */}
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Max Capacity</label>
            </div>
            <select class="custom-select" id="maxCapacityInput">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
            </div>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Occupancy Status</label>
            </div>
            <select class="custom-select" id="statusInput">
                <option selected>Choose...</option>
                <option value="1 spot available">1 Spot Available</option>
                <option value="2 spots available">2 Spots Available</option>
                <option value="occupied">Occupied</option>
                <option value="outOfOrder">Out Of Order</option>
            </select>
            </div>

            <br/>
            <button type="button" onClick={this.addRoom} class="btn btn-success">Add Room</button>
            <button type="button" onClick={this.updateRoom} class="btn btn-primary">Update Room</button>
            <button type="button" onClick={this.getRooms} class="btn btn-info">Get Room</button>


            <br/>
            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Rooms:</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={JSON.stringify(this.state.data)}></textarea>
            </div>



            </div><br/>
          
            <Link to="/MainPage">  <button type="button" class="btn btn-secondary">Go to Main</button></Link>

            </div>
            

        )
    }
}
export default ModifyRoom;