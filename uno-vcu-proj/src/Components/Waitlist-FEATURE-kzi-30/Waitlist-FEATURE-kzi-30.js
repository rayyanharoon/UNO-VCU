

import React from "react";
import {Link} from "react-router-dom";


class WaitList extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    signUp = () => {
        console.log("Submit button was called");

        fetch('http://localhost:8000/WaitList',
        {
            method:'POST',
            headers:{'Content-type' : 'Application/json'},
            body: JSON.stringify({
                name: document.getElementById("nameInput").value,
                email: document.getElementById("emailInput").value,
                phone: document.getElementById("phoneInput").value,
                address: document.getElementById("addressInput").value
            })
        })
        .then(response =>response.json)
        .then(data => this.setState({"data":data}))
    }
    render(){
        return(
        <div className="App">
            <h1>Sign up for the Waitlist!</h1>
            <br/>
            Full Name: <input type="text" id="nameInput"/><br/>
            Email: <input type="text" id="emailInput"/><br/>
            Phone Number: <input type="text" id="phoneInput"/><br/>
            Address: <input type="text" id="addressInput"/>
            <br/>
            <button onClick={this.signUp}>Submit</button>
            <br/>
            <Link to="/MainPage"><button type="button">Go to Main</button></Link>



        </div>
)
    }
}

export default WaitList;