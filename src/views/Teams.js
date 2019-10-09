import React from 'react';
import axios from 'axios';
import TeamsList from '../components/TeamsList'

class Teams extends React.Component {
  state = {
    teams:[],
    newTeamName: '',
    showTeams: false,
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ teams: response.data })
      })
  }
  
  submitTeam = () => {
    const value = this.state.newTeamName;
    const jwt = localStorage.getItem('jwt')
    axios
      .post('/teams', { name: value }, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        const teamsLocal = this.state.teams.slice();
        teamsLocal.push(response.data);
        this.setState({ teams: teamsLocal })
      }).catch(error => {
        console.log(error)
    })
  }

  leaveTeam = (theTeamId) => {
    const jwt = localStorage.getItem('jwt');
    axios.delete('/enrollments/' + theTeamId, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        const teamsLocal = this.state.teams.map(team => {
          if (team.id === theTeamId) {
            team.joined = !team.joined;
          }
          return team
        });

        this.setState({ teams: teamsLocal })
        this.setState({ joinedTeam: false })
        console.log('joinedTeam: ' + this.state.joinedTeam)

      })
    }

    joinTeam = (theTeamId) => {
        const jwt = localStorage.getItem('jwt')
        axios
          .post('/enrollments', { team_id: theTeamId }, { headers: { 'Authorization': `Bearer ${jwt}`}})
          .then(response => {
            const teamsLocal = this.state.teams.map(team => {
              if (team.id === theTeamId) {
                team.joined = !team.joined;
              }
              return team
            });
            this.setState({
              teams: teamsLocal,
            })
            console.log('joinedTeam: ' + this.state.joinedTeam)

          }).catch(error => {
            console.log(error)
        })
      }

  handleChange = (event) => {
    this.setState({newTeamName: event.target.value})
  }

  render(){
    return (
      <div className="list-group">{
      <div>
        <h1>TEAM PAGE</h1>  
        <input 
          id="enter-team" 
          value={this.state.newTeamName} 
          onChange={this.handleChange} />

        <button className="btn btn-primary" onClick={this.submitTeam}>Submit</button>
        <br></br>
        <br></br>
        <br></br>
        <TeamsList  
          handleJoinTeam={this.joinTeam}
          handleLeaveTeam={this.leaveTeam}
          showTeams={this.state.showTeams}
          theTeams={this.state.teams}
          joinedTeam={this.state.joinedTeam}  />

      </div>
    }</div>
            )
          }
        }

export default Teams