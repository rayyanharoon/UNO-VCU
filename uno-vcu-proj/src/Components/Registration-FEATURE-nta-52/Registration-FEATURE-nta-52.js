import React from 'react';
import './App.css';

import Registration from './Components/Registration/Registration';

var data={loginMsg: "You have successfully registered!"}

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registrationForm: [{
        Firstname: "Isabel",
        Lastname: "Moner",
        Email: "isabelm@gmail.com",
        Password: "!hello123",
        ConfirmPassword: ""
      },
      {
        Firstname: "Ant",
        Lastname: "Nekton",
        Email: "antInTheDeep@anorrax.com",
        Password: "GoDeep47M",
        ConfirmPassword: ""
      },
      {
        Firstname: "Colleen",
        Lastname: "Hoover",
        Email: "hooverAuthor@gmail.com",
        Password: "Author:MaybeSomeday",
        ConfirmPassword: ""
      }]
    }
  }



  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Registration</h1>
        First Name: <input type='text'/><br/>
        Last Name: <input type='text'/><br/>
        Email: <input type='text'/><br/>
        Password: <input type='text'/><br/>
        Confirm Password: <input type='text'/><br/>
        <button type="submit" onClick={this.registerData}>Register</button>
        <Registration loginMsg={data.loginMsg}/>
      </div>
    );
  }
}
export default Register;
