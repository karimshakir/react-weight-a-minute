import React from 'react';
import axios from 'axios';




class Profile extends React.Component{
  state = {
    currentWeight: '',
    weightHistory: [],
    myTeams: [],
    errors: []
  }
    getWeights() {
      axios
        .get('/players' )
        .then(response => {
          console.log(response)
      }).catch(error => {
        console.log(error)
    })
  }
  render(){
    return (
      <div>
       <h1>PROFILE PAGE</h1>
       <p>{this.response}</p>
       <p>perfect!!</p>
       <button onClick={this.getWeights}>Weights</button>
       </div>
    )
  }
}

export default Profile;
