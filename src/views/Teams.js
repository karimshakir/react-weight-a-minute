import React from 'react';
import axios from 'axios';
import TeamsList from '../components/TeamsList'


class Teams extends React.Component {

  state = {
    teams:[],
    show: 'something'
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ teams: response.data})
      })
  }

  render(){

    return (
      <div>
        <h1>TEAM PAGE</h1>  
        <TeamsList theTeams={this.state.teams}  />
        
      </div>
            )
          }
        }

export default Teams