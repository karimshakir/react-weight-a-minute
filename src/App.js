import React from 'react';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import { Router, Link, Redirect } from "@reach/router";
import axios from 'axios';
import './App.css';

class PrivateRoute extends React.Component {
  render() {
    return this.props.isLoggedIn ? <this.props.component /> : <Redirect to='login' noThrow />
  }
}

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      console.log("already logged in")
      axios
        .get('/sessions', { headers: { 'Authorization': `Bearer ${jwt}`}})
        .then(data => {
          console.log(data)
          this.setState({ isLoggedIn: true })
        })
        .catch(error => {
          this.setState({ isLoggedIn: false })
        })
    } 
  }

  login = () => {
    const name = document.getElementById("name").value
    axios
      .post('/sessions', { name: name })
      .then(data => {
        const jwt = data.data.jwt
        localStorage.setItem('jwt', jwt);

        this.setState({ isLoggedIn: true })
      }).catch(error => {
        this.setState({ isLoggedIn: false })
    })
  }

  logout = () => {
    localStorage.clear();
    this.setState({ isLoggedIn: false });


  }

  render() {
    return (
      <div>
        <h1>WEIGHT - A - MINUTE</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="login">Login</Link>
          <a onClick={this.logout}>Logout</a>


        </nav>
        <Router>
          <PrivateRoute path='/' isLoggedIn={this.state.isLoggedIn} component={Home} />
          <Login path="login" isLoggedIn={this.state.isLoggedIn} handleLogin={this.login} />
          <Profile path="profile"/>
        </Router>
      </div>
    );
  }
}

        
export default App;
