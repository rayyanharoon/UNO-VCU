import React from 'react';

let data = {
  accounts : [
    {
    email: "admin@vcc.ca",
    password: "admin123"
    },
    {
      email: "user@vcc.ca",
      password: "user123"
    }
  ]
}


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      enteredAccount : {
        email: "enteredEmail",
        password: "enteredPassword"
      }

    }
   
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.loginAccount = this.loginAccount.bind(this);

  }  
  updateEmail(e){
    this.setState({
      enteredAccount: {
        ...this.state.enteredAccount,
        email: e.target.value
      }
    })
  }

  updatePassword(e){
    this.setState({
      enteredAccount: {
        ...this.state.enteredAccount,
        password: e.target.value
      }
    })
  }

  loginAccount(){

    for(let acc of data.accounts){
      if(this.state.enteredAccount.email !== acc.email && this.state.enteredAccount.password !== acc.password)
      {
        console.log("invalid login")
        return;
      }
      else if(this.state.enteredAccount.email === acc.email && this.state.enteredAccount.password === acc.password)
      {
        console.log("login matched")
        return;
      }

    }


  }
  render() {
    return (
      <div className='Login'>
        <h1>myVCU</h1>
        Email: <input type="text" onChange={this.updateEmail}/> <br/>
        Password: <input type="password" onChange={this.updatePassword}/> <br/>
        Remember me: <input type="checkbox"/> <br/>
        <button type="submit" onClick={this.loginAccount}>Login</button> <br/>
        <a href="#">Forgot password?</a>






      </div>
    )
  }

}

export default Login;
