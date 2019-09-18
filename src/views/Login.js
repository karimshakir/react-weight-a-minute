import React from 'react';
import { Redirect } from "@reach/router";

class Login extends React.Component {

  render() {
    console.log(this.props.isLoggedIn)
    if (this.props.isLoggedIn) {
    return <Redirect to='profile' noThrow />
    }
    return (
      <div>
        <h1> Login </h1>
        <input id="name" />
        <button onClick={this.props.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login;