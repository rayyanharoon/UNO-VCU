import React from 'react';
import {Link} from 'react-router-dom';




class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {}

  }  

  verifyLogin = () => {
    console.log("Login in...");
    var enteredEmail = document.getElementById("emailInput").value;
    var enteredPassword = document.getElementById("passwordInput").value;
    fetch('http://localhost:8000/login', {
       method:'POST',
       headers: {'Content-type' : 'Application/json'},
       body: JSON.stringify({
         email: enteredEmail,
         password: enteredPassword
       })      
      })
    .then(response => {response.json()})
    .then(data => this.setState({"data" : data}))
  }

  render() {
    return (
      <div className="App">
        <h1>myVCU</h1>
        Email: <input type="text" id="emailInput"/> <br/>
        Password: <input type="password" id="passwordInput"/> <br/>
        Remember me: <input type="checkbox"/> <br/>
        <button type="submit" onClick={this.verifyLogin}>Login</button> <br/>
        <a href="#">Forgot password?</a>
        <Link to="/Register"><button type="button">Register</button></Link>
      </div>
    )
  }

}

export default Login;
