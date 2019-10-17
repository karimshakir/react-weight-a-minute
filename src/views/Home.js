import React from 'react';
import axios from 'axios';
import Alert from '../components/Alert'
import { navigate } from "@reach/router";

class Home extends React.Component {
   state = {
    currentWeight: '',
    alert: []
  }

submitWeight = () => {
    const value = this.state.currentWeight;
    const jwt = localStorage.getItem('jwt')
    if (value) {
    axios
      .post('/weights', { value: value }, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(data => {
        console.log(data.data)
      navigate('profile')
      }).catch(error => {
        console.log(error)
    })
    } else {
      console.log("Weight Cannot Be Blank")
      this.setState({ alert: ["Weight Cannot Be Blank"]})
    }
  }

  handleChange = (event) => {
    this.setState({ currentWeight:event.target.value })
    console.log(event.target.value)
  }
  render(){
    return (
       <div>
          <h1> Enter Weight(lbs)</h1>
          <Alert alert={this.state.alert}/>
          <input placeholder="###" onChange={this.handleChange}/>
          <button className="btn btn-primary" onClick={this.submitWeight}>Submit</button>
      </div>
    )
  }
}

export default Home
