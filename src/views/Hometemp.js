import React from 'react';
import axios from 'axios';
import { Router, Link, Redirect } from "@reach/router";



class Home extends React.Component {
  state = {
    currentWeight: ''
  }

  submitWeight = () => {
    const value = this.state.currentWeight;
    const jwt = localStorage.getItem('jwt')
    axios
      .post('/weights', { value: value }, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(data => {
      }).catch(error => {
        console.log(error)
    })
  }

  handleChange = (event) => {
    this.setState({ currentWeight:event.target.value })
  }

  render() {
    if (this.state.currentWeight){
      return <Redirect to="profile" noThrow/>
    }
    return (
       <div>
        <h1> Enter Weight </h1>
        <input id="enter-weight" value={this.state.currentWeight} onChange={this.handleChange}/>
        <button onClick={this.submitWeight}>Submit</button>
      </div>
    )
  }
}

export default Home;