import React from 'react';

class Registration extends React.Component {
    render() {
    return (
        <div className='App'>
        <p>{this.props.loginMsg}</p>
          {/* Username: <input type='text'/>
          Password: <input type='text'/>
          <button type="submit" onClick={this.registerData}>Register</button> */}
        </div>
      )
    }
}

export default Registration;
