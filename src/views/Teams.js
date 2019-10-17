import React from 'react';
import axios from 'axios';
import Alert from '../components/Alert'
import TeamsList from '../components/TeamsList'

class Teams extends React.Component {
  state = {
    teams:[],
    newTeamName: '',
    showTeams: false,
    alert: []
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
    if(value) {
    axios
      .post('/teams', { name: value }, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        const newTeam = response.data
        newTeam.joined = !newTeam.joined;
        const teamsLocal = this.state.teams.slice();
        teamsLocal.unshift(newTeam);
        this.setState({ teams: teamsLocal })
        this.setState({newTeamName: ''})
        this.value = this.state.newTeamName
      }).catch(error => {
          console.log(error.response.data.errors)
          this.setState({
            alert: error.response.data.errors
          })
        })
      } else {
      console.log("Team Cannot Be Blank")
      this.setState({ alert: ["Team Cannot Be Blank"]})
    }
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
    event.target.value = ''
  }

  render(){
    return (
      <div className="list-group">{
      <div>
        <h1>COMPETITION PAGE</h1>  
        <Alert alert={this.state.alert}/>
        <p>Create New Competition</p>
        <input 
          id="enter-team" 
          value={this.state.newTeamName} 
          onChange={this.handleChange}
          placeholder="" />
        <button className="btn btn-primary" onClick={this.submitTeam}>Submit</button>
        <br></br>
        <br></br>
        <br></br>
        <p>All Existing Competitions Are Below</p>
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