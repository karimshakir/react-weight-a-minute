import React from 'react'
import axios from 'axios'
import GlobalRankings from '../components/GlobalRankings'

class LeaderBoard extends React.Component {

  state = {
    players: null,
    totalWtLoss: ''
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
        this.setState({players: response.data })
      })
  }
    render(){
    if (!this.state.players) {
      return null;
    }
    return (
      <div>
        <h1>Leader Board</h1>

        <GlobalRankings playerInfo={this.state.players}/>
      </div>
            )
          }
}

export default LeaderBoard