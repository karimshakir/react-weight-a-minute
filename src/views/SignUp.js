import React from 'react';
import { Redirect, Link } from "@reach/router";

class SignUp extends React.Component {

  render() {
    console.log("LoggedIn: " + this.props.isLoggedIn)
    if (this.props.isLoggedIn) {
    return <Redirect to='profile' noThrow />
    }
    return (
      <div>
        <h1> SignUp </h1>
        <input id="name" />
        <button className="btn btn-primary" onClick={this.props.handleSignup}>SignUp</button>
        <br />
        <Link to="/login">Login</Link>
      </div>
    )
  }
}


export default SignUp;