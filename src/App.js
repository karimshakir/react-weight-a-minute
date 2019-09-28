import React from 'react';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Teams from './views/Teams'
import Leaderboard from './views/Leaderboard'
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
    isLoggedIn: false,
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      console.log("already logged in")
      axios
        .get('/sessions', { headers: { 'Authorization': `Bearer ${jwt}`}})
        .then(data => {
          this.setState({ isLoggedIn: true })
        })
        .catch(error => {
          this.setState({ isLoggedIn: false })
        })
    } else {
      console.log("logged out")
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
          <Link to="/teams">Teams</Link>
          <Link to="/leaderboard">Leader Board</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={this.logout} >Logout</button>
        </nav>
           
        <Router>
          <Login path="login" 
            isLoggedIn={this.state.isLoggedIn} 
            handleLogin={this.login} />

          <PrivateRoute path='teams'
            isLoggedIn={this.state.isLoggedIn} 
            component={Teams} />

          <PrivateRoute path='/' 
            isLoggedIn={this.state.isLoggedIn} 
            component={Home} />

          <PrivateRoute path='profile' 
            isLoggedIn={this.state.isLoggedIn} 
            component={Profile} />   

          <PrivateRoute path='leaderboard' 
          isLoggedIn={this.state.isLoggedIn} 
          component={Leaderboard} /> 
        </Router>
      </div>
    )
  }
}

export default App;
