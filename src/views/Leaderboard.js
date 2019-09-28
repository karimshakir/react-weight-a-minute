import React from 'react'
import axios from 'axios'
import Teams from './Teams'
import TeamsList from '../components/TeamsList'
import GlobalRankings from '../components/GlobalRankings'

class LeaderBoard extends React.Component {

  state = {
    players: null,
    totalWtLoss: '',
    showTeams: false
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({players: response.data })
      })

    axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ teams: response.data })
      })
  }

  showTeams = () => {
    this.setState({showTeams: !this.state.showTeams})
  }



    render(){
    if (!this.state.players) {
      return null;
    }
    return (
      <div>
        <h1>Leader Board</h1>
        <GlobalRankings
         playerInfo={this.state.players}
         teams={this.state.teams} />
      <h2>Choose A Team</h2>
      <button onClick={this.showTeams} >Show Teams</button>
         <TeamsList  
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}  />

      </div>
            )
          }
}

export default LeaderBoard

