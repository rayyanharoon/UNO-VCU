

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
            {/* name */}
           <div class="input-group mb-3">
           <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">Full Name</span>
           </div>
           <input type="text" class="form-control" placeholder="Shellissa Joice" aria-label="fullname" aria-describedby="basic-addon1"   id="nameInput" />
           </div>
           {/* email */}
           <div class="input-group mb-3">
           <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon2">Email</span>
           </div>
           <input type="text" class="form-control" placeholder="sjoi@vcu.ca" aria-label="email" aria-describedby="basic-addon2"  id="emailInput"/>
           </div>
           {/* phone */}
           <div class="input-group mb-3">
           <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon3">Phone</span>
           </div>
           <input type="text" class="form-control" placeholder="1234567890" aria-label="phoneNum" aria-describedby="basic-addon3"  id="phoneInput"/>
           </div>
           <div class="input-group mb-3">
           <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon4">Address</span>
           </div>
           <input type="text" class="form-control" placeholder="Username" aria-label="21st Street" aria-describedby="basic-addon4"   id="addressInput"/>
           </div>
           <button type="button" class="btn btn-info"onClick={this.signUp}>Submit</button>
           </div>
)
    }
}

export default WaitList;