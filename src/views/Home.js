import React from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

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
        console.log(data.data)
      navigate('profile')
      }).catch(error => {
        console.log(error)
    })
  }

  handleChange = (event) => {
    this.setState({ currentWeight:event.target.value })
    console.log(event.target.value)
  }
  render(){
    return (
       <div>
        <h1> Enter Weight </h1>
        <input id="enter-weight" value={this.state.currentWeight} onChange={this.handleChange}/>
        <button onClick={this.submitWeight}>Submit</button>
      </div>
    )
  }
}

export default Home
 