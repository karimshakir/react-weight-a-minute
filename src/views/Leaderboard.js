import React from 'react'
import axios from 'axios'
import SelectTeam from '../components/SelectTeam'
import GlobalRankings from '../components/GlobalRankings'

class LeaderBoard extends React.Component {

  state = {
    teams: [],
    players: null,
    totalWtLoss: '',
    showTeams: false,
    leaders: []
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
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


  ranked_players_of_selectedTeam = (theTeamId) => {
    const jwt = localStorage.getItem('jwt');
    axios.get('/rank/' + theTeamId,
      { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ leaders: response.data })
      })  
  }

    render() {
    return (
      <div>
        <h1>Leader Board</h1>
        
<GlobalRankings
          leaders={this.state.leaders}
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}  />
        <button onClick={this.showTeams} >Show Teams</button>
        <SelectTeam
          handleClick={this.ranked_players_of_selectedTeam}
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}  />    
      </div>
            )
          }
}

export default LeaderBoard
