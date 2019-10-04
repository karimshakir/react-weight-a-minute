import React from 'react';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
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

  signup = () => {
    const name = document.getElementById("name").value
    axios
      .post('/players', { name: name })
      .then(data => {
        const jwt = data.data.jwt
        localStorage.setItem('jwt', jwt);
        
        this.setState({ isLoggedIn: true });
      }).catch(error => {
        console.log(error.response.data.errors);
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">WEIGHT - A - MINUTE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <div className="nav-item nav-link">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-item nav-link">
                <Link to="/teams">Teams</Link>
              </div>
              <div className="nav-item nav-link">
                <Link to="/leaderboard">Leader Board</Link>
              </div>
              <div className="nav-item nav-link">
                <Link to="/profile">Profile</Link>
              </div>
              {this.state.isLoggedIn && (
                <div className="nav-item nav-link">
                  <div onClick={this.logout} >Logout</div>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="container">
          <Router>
            <Login path="login" 
              isLoggedIn={this.state.isLoggedIn} 
              handleLogin={this.login} />

            <SignUp path="signup" 
              isLoggedIn={this.state.isLoggedIn} 
              handleSignup={this.signup}
            />

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
      </div>
    )
  }
}

export default App;
