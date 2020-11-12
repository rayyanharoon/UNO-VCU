import React from 'react';
// import {Link} from 'react-router-dom';

class BookRooms extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getRooms = () => {
        console.log("Get Rooms called");
        fetch('http://localhost:8000/', {method: 'GET'})
        .then(response => response.json())
        .then(data => this.setState({"data" : data}))
    }

    addRoom = () => {
        console.log("Room Selected");
        var idToUpdate = document.getElementById("idInput").nodeValue;
        var newType = document.getElementById("typeInput").nodeValue;
        var newStatus = document.getElementById("statusInput").value;
        fetch('http://localhost:8000/BookRooms',
        {
            method:'POST',
            headers:{'Content-type':'Application/json'},
            body: JSON.stringify({
                roomID : idToUpdate,
                roomType : newType,
                status : newStatus
            })
        })
        .then(response => response.json)
        .then(data => this.setState({"data":data}))
        }
    render() {
        return (
            <div className="App">
                <h1>Book Rooms</h1>
                Room ID: <input type="text" id="idInput"/>
                Room Type: <select id="typeInput">
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="economyDouble">Economy Double</option>
                </select>
                Occupancy Status: <select id="statusInput">
                    <option value="1 spot available">1 Spot Available</option>
                    <option value="2 spots available">2 Spots Available</option>
                </select>
                <br>
                <button onClick={this.addRoom}>Apply For Room</button>
                </br>
            </div>
        )
    }    
}

export default BookRooms;