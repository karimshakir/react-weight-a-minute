import React from 'react';
import axios from 'axios';
import Weights from '../components/Weights'
import MostRecentWeight from '../components/MostRecentWeight'
import WeightLost from '../components/WeightLost'
import TeamsList from '../components/TeamsList'

class Profile extends React.Component{

  state = {
    player: null,
    errors: [],
    showAllWeights: false,
    showMyTeams: false,
    totalWtLoss: '',
    myWeights: [],
    myTeams:[]
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players/me', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ player: response.data })
        this.setState({myTeams: response.data.teams.reverse()})
      })

    axios.get('/weights', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        // console.log(response.data)
        this.setState({ myWeights: response.data })
      })
  }

  myRank_of_selectedTeam = (theTeamId) => {
    const jwt = localStorage.getItem('jwt');
    axios.get('/myrank/' + theTeamId,
      { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({ leaders: response.data })
      })
  }

  leaveTeam = (theTeamId) => {
    const jwt = localStorage.getItem('jwt');
    axios.delete('/enrollments/' + theTeamId, { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        // console.log(response.data)
        window.location.reload(false);
      })
    }

  toggleIndexWeights = () => {
    this.setState({
      showAllWeights:!this.state.showAllWeights,
      showMyTeams: false
    })
  }

  showMyTeams = () => {
    this.setState({
      showMyTeams: !this.state.showMyTeams,
      showAllWeights: false
    })
  }

  render(){
    if (!this.state.player) {
      return null;
    }
    return (
      <div>
        <h1>PROFILE PAGE</h1>

        <WeightLost weight={this.state.player.total_loss} Tag="h3" />
        <MostRecentWeight weights={this.state.player.weights} />
        <button className="btn btn-primary" onClick={this.toggleIndexWeights} > My Weight History </button>
        <button className="btn btn-primary" onClick={this.showMyTeams} >My Competitions</button>

        <Weights weights={this.state.myWeights}
         showAllWeights={this.state.showAllWeights}
         weightLost={this.state.player.weightlost} /> 


        {this.state.showMyTeams &&
          <TeamsList
            theTeams={this.state.myTeams.map(team => {
              team.joined = true;
              return team;
            })}
            handleLeaveTeam={this.leaveTeam}
            handleJoinTeam={() => {}}
          />
        }
      </div>
            )
          }
        }
export default Profile;




  