import React from 'react';
import axios from 'axios';
import Weights from '../components/Weights'
import MostRecentWeight from '../components/MostRecentWeight'
import MyTeams from '../components/MyTeams'

class Profile extends React.Component{

  state = {
    player: null,
    currentWeight: '',
    weightHistory: [],
    errors: [],
    showAllWeights: false,
    showMyTeams: false,
    MyTeams:[]
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players/me', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        this.setState({ player: response.data })
      })
  }

  // myTeams() {
  //   const jwt = localStorage.getItem('jwt');
  //   axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
  //     .then(response => {
  //       this.setState({ player: response.data })
  //     })
  // }

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
        <MostRecentWeight weights={this.state.player.weights} />
        <button onClick={this.toggleIndexWeights} >Weight History </button>
        <Weights weights={this.state.player.weights} showAllWeights={this.state.showAllWeights} /> 
        <button onClick={this.showMyTeams} >MyTeams</button>
        <MyTeams showMyTeams={this.state.showMyTeams} myTeams={this.state.player.teams} />
      </div>
            )
          }
        }
export default Profile;


