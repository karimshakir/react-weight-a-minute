import React from 'react';
import axios from 'axios';
import TeamsList from '../components/TeamsList'
import { navigate } from "@reach/router";

class Teams extends React.Component {
  state = {
    teams:[],
    newTeamName: '',
    showTeams: false
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ teams: response.data})
      })
  }
  
  submitTeam = () => {
    const value = this.state.newTeamName;
    const jwt = localStorage.getItem('jwt')
    axios
      .post('/teams', { name: value }, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response)
        navigate('profile')
      }).catch(error => {
        console.log(error)
    })
  }

    joinTeam = (theTeamId) => {
        const jwt = localStorage.getItem('jwt')
        axios
          .post('/enrollments', { team_id: theTeamId }, { headers: { 'Authorization': `Bearer ${jwt}`}})
          .then(data => {
          navigate('profile')
          }).catch(error => {
            console.log(error)
        })
      }

  handleChange = (event) => {
    this.setState({newTeamName: event.target.value})
  }

  render(){

    return (
      <div>
        <h1>TEAM PAGE</h1>  
        <h2>Create A Team</h2>  
        <input id="enter-team" value={this.state.newTeamName} onChange={this.handleChange} />
        <button onClick={this.submitTeam}>Submit</button>
        <h2>Join A Team</h2>  
        <TeamsList  handleClick={this.joinTeam} showTeams={this.state.showTeams} theTeams={this.state.teams}  />

      </div>
            )
          }
        }

export default Teams