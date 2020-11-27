import React, {Component} from 'react';
import ReactDOM, {Route} from 'react-router-dom';
//import './App.css';


var registerMsg = "You have successfully registered!"

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  registerData() {
    console.log(registerMsg)
  }

  confirmRegistration = () => {
    console.log("testing")
    let registrar = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("emailadd").value,
      password: document.getElementById("password").value,
      confirmpassword: document.getElementById("confirmPassword").value
    }
    fetch('http://localhost:8000/Register', {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.parse(registrar)
    })
    // .then(response =>
    //   {
    //     if(response.confirmPassword == true)
    //     {
    //       window.location='/Login'
    //       console.log('Registered successfully!')
    //     }
    //     else(response.confirmpassword == false)
    //     {
    //       window.location='/Register'
    //       console.log('Password does not match.')
    //     }
    //   })
      .then(data => this.setState({'data': data}))

  }

  render() {
    return(
      <div className="App">
      <form>
        <div className="form-group col-sm-4">
        <label for="firstname">First Name</label>
        <input type="text" className="form-control" id="firstname"/>
        </div>

        <div className="form-group col-sm-4">
        <label for="lastname">Last Name</label>
        <input type="text" className="form-control" id="lastname"/>
        </div>

        <div className="form-group col-sm-4">
        <label for="emailadd">Email Address</label>
        <input type="email" className="form-control" id="emailadd" aria-describedby="emailHelp"/>
        </div>

        <div className="form-group col-sm-4">
        <label for="password">Password</label>
        <input type="password" className="form-control" id="password"/>
        </div>

        <div className="form-group col-sm-4">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword"/>
        </div>

        <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    );
  }
}
export default Register;


