import React from 'react';
import {Link} from 'react-router-dom';





class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {}

  }  

  verifyLogin = () => {
    console.log("Login in...");
    let userInput = {
      email : document.getElementById("emailInput").value,
      password : document.getElementById("passwordInput").value
    }
    fetch('http://localhost:8000/Login', {
       method:'POST',
       headers: {'Content-type' : 'Application/json'},
       body: JSON.stringify(userInput)      
      })
    .then(response =>
        {
          if(response.isAdmin == true)
          {
            window.location="/ModifyRoom"
            console.log(response.isAdmin)
          }
          else if(response.status == 200 || response.isAdmin == true)
          {
            window.location="/ModifyRoom"
            console.log(response.isAdmin)

          }
        })
    .then(data => this.setState({"data":data}))
    // console.log(this.state.redirectAdmin)
  }

  render() {
    return (
      <div className="App">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">Email</span>
      </div>
      <input type="text" className="w-25p-3form-control " placeholder="studentName@email.com" aria-label="Username" ria-describedby="basic-addon1" id="emailInput" />
      <br/>      <br/>

      <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">Password</span>
      </div>
      <input type="password" className="w-25p-3form-control " placeholder="***********" aria-label="Password" aria-describedby="basic-addon2" id="passwordInput" />
    </div>
    </div>
        <Link to="/Register"><button type="button">Register</button></Link>
      </div>
    )
  }

}

export default Login;
