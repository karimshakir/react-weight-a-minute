import React from 'react';
import axios from 'axios';




class Profile extends React.Component{
  state = {
    test: "old value",
    players: ["testing-1","testing-2","testing-3"],
    currentWeight: '',
    weightHistory: [],
    myTeams: [],
    errors: []
  }
    getWeights = () => {
      axios
        .get('/players' )
        .then(response => {
        this.setState({test:"new-value"})
        this.setState({players: response.data.names})  
      }).catch(error => {
        console.log(error)
    })
}

    getTesting = () => {
      this.setState({test:"New Value"})
  }

  render(){
    return (
      <div>
        <h1>PROFILE PAGE</h1>

const listItems = players.map((player) =>
  <li>{player}</li>



       <button onClick={this.getWeights}>Weights</button>
       <button onClick={this.getTesting}>Tester</button>
       </div>
    )
  }
}

export default Profile;
