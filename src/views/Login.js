import React from 'react';
import { Redirect, Link } from "@reach/router";

class Login extends React.Component {

  render() {
    console.log("LoggedIn: " + this.props.isLoggedIn)
    if (this.props.isLoggedIn) {
    return <Redirect to='profile' noThrow />
    }
    return (
      <div>
        <h1> Login </h1>
        <input id="name" />
        <button className="btn btn-primary" onClick={this.props.handleLogin}>Login</button>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
}


export default Login;