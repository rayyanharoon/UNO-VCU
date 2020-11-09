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
        fetch('http://localhost:8000/ModifyRoom', {method: 'GET'})
        .then(response => response.json())
        .then(data => this.setState({"data" : data}))
    }

    addRoom = () => {
        console.log("Add Room called");
        var idToUpdate = document.getElementById("idInput").value
        var newType = document.getElementById("typeInput").value;
        var newMaxCapacity = document.getElementById("maxCapacityInput").value;
        var newStatus = document.getElementById("statusInput").value;
        fetch('http://localhost:8000/ModifyRoom',
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
        fetch('http://localhost:8000/ModifyRoom',{
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

        fetch('http://localhost:8000/ModifyRoom', {
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
            Room ID: <input type="text" id="idInput"/>            
            <button onClick={this.deleteRoom}>Delete Room</button><br/>

             Room Type: <select id="typeInput">
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="economyDouble">Economy Double</option>
            </select>
            
            {/* set to read only and update on change of room type */}
            Max Capacity: <input type="text" id="maxCapacityInput"></input>

            Occupancy Status: <select id="statusInput">
                <option value="1 spot available">1 Spot Available</option>
                <option value="2 spots available">2 Spots Available</option>
                <option value="occupied">Occupied</option>
                <option value="outOfOrder">Out Of Order</option>
            </select>
            <br/>
            <button onClick={this.addRoom}>Add Room</button>
            <button onClick={this.updateRoom}>Update Room</button>
            <button onClick={this.getRooms}>Get Rooms</button>

            <br/>
            <textarea value={JSON.stringify(this.state.data)}></textarea>



            </div><br/>
            <Link to="/MainPage"><button type="button">Go to Main</button></Link>

            </div>
            

        )
    }
}

export default ModifyRoom;