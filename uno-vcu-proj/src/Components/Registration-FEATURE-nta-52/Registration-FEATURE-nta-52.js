import React, {Component} from 'react';
import ReactDOM, {Route} from 'react-router-dom';
//import './App.css';


var registerMsg = "You have successfully registered!"

class Register extends Component {
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
      }], 
      addRegistration: {
        Firstname: "new fname",
        Lastname: "new lname",
        Email: "new email",
        Password: "new password",
        ConfirmPassword: "new cpassword"
      }
    }

    this.registerfname = this.registerfname.bind(this)
    this.registerlname = this.registerlname.bind(this)
    this.registeremail = this.registeremail.bind(this)
    this.registerpassword = this.registerpassword.bind(this)
    this.regconfirmpassword = this.regconfirmpassword.bind(this)
    this.registerData = this.registerData.bind(this)

  }

  registerfname(e) {
    this.setState({
      addRegistration: {
        ...this.state.addRegistration,
        Firstname: e.target.value
      }
    })
  }

  registerlname(e) {
    this.setState({
      addRegistration: {
        ...this.state.addRegistration,
        Lastname: e.target.value
      }
    })
  }

  registeremail(e) {
    this.setState({
      addRegistration: {
        ...this.state.addRegistration,
        Email: e.target.value
      }
    })
  }

  registerpassword(e) {
    this.setState({
      addRegistration: {
        ...this.state.addRegistration,
        Password: e.target.value
      }
    })
  }

  regconfirmpassword(e) {
    this.setState({
      addRegistration: {
        ...this.state.addRegistration,
        ConfirmPassword: e.target.value
      }
    })
  }

  registerData() {
    console.log(registerMsg)
  }


  render() {
    return (
      <div className='App'>
        <h1>Welcome to the Registration</h1>
        First Name: <input type='text' onChange={this.registerfname}/><br/>
        Last Name: <input type='text' onChange={this.registerlname}/><br/>
        Email: <input type='text' onChange={this.registeremail}/><br/>
        Password: <input type='password' onChange={this.registerpassword}/><br/>
        Confirm Password: <input type='password' onChange={this.regconfirmpassword}/><br/>
        <button type="submit" onClick={this.registerData}>Register</button>

       
      </div>
    );
  }
}
export default Register;
