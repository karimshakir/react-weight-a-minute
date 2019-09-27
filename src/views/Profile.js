import React from 'react';
import axios from 'axios';
import Weights from '../components/Weights'

import MostRecentWeight from '../components/MostRecentWeight'
import MyTeams from '../components/MyTeams'
import { navigate } from "@reach/router";

class Profile extends React.Component{

  state = {
    player: null,
    weightHistory: [],
    errors: [],
    showAllWeights: false,
    showMyTeams: false,
    MyTeams:[],
    totalWtLoss: ''
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players/me', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ player: response.data })
      })

    // axios.get('/weights/me', { headers: { 'Authorization': `Bearer ${jwt}`}})
    //   .then(response => {
    //     console.log(response.data)
    //     this.setState({ totalWtLoss: response.data })
    //   })

  }

  leaveTeam = (theTeamId) => {
    const jwt = localStorage.getItem('jwt');
    axios.delete('/enrollments/' + theTeamId, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        window.location.reload(false);
      })
    }


  toggleIndexWeights = () => {
    this.setState({showAllWeights:!this.state.showAllWeights})
  }

  showMyTeams = () => {
    this.setState({showMyTeams: !this.state.showMyTeams})
  }

  render(){
    if (!this.state.player) {
      return null;
    }
    return (
      <div>
        <h1>PROFILE PAGE</h1>
        <h3>Total Weight Loss: {this.state.totalWtLoss}lbs</h3>
        <MostRecentWeight weights={this.state.player.weights} />

        <button onClick={this.toggleIndexWeights} >Weight History </button>

        <Weights weights={this.state.player.weights}
         showAllWeights={this.state.showAllWeights}
         weightLost={this.state.player.weightlost} /> 

        <button onClick={this.showMyTeams} >MyTeams</button>

        <MyTeams handleClick={this.leaveTeam}
           showMyTeams={this.state.showMyTeams}
           myTeams={this.state.player.teams} />
      </div>
            )
          }
        }
export default Profile;


