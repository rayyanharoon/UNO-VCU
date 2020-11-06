import React from 'react';

class Login extends React.Component{
    render(){
        return (
            <tr>
                <td>Email: { this.props.email}</td>
                <td>Password: {this.props.password}</td>
            </tr>
        )
    }



}

export default Login;