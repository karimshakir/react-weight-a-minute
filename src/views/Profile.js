import React from 'react';
import axios from 'axios';
import Weights from '../components/Weights'
import MostRecentWeight from '../components/MostRecentWeight'

class Profile extends React.Component{

  state = {
    player: null,
    currentWeight: '',
    weightHistory: [],
    errors: [],
    showAllWeights: false
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        this.setState({ player: response.data })
      })
  }

  toggleIndexWeights = () => {
    this.setState({showAllWeights:!this.state.showAllWeights})
  }

  render(){
    if (!this.state.player) {
      return null;
    }
    return (
      <div>
        <h1>PROFILE PAGE</h1>
        <MostRecentWeight weights={this.state.player.weights} />
        <button onClick={this.toggleIndexWeights} >Weight History</button>
        <Weights weights={this.state.player.weights} showAllWeights={this.state.showAllWeights} />     
      </div>
            )
          }
        }
export default Profile;


