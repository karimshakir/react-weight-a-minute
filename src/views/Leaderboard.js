import React from 'react'
import axios from 'axios'
import Teams from './Teams'
import TeamsList from '../components/TeamsList'
import SelectTeam from '../components/SelectTeam'
import GlobalRankings from '../components/GlobalRankings'

class LeaderBoard extends React.Component {

  state = {
    teams: [],
    players: null,
    totalWtLoss: '',
    showTeams: false,

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
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}  />
        <button onClick={this.showTeams} >Show Teams</button>
        <SelectTeam
          handleClick={this.joinTeam}
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}  />    
      </div>
            )
          }
}

export default LeaderBoard

