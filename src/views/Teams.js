import React from 'react'
import axios from 'axios'

class Teams extends React.Component {

  state = {
    teams: []
  }

  componentDidMount() {
      const jwt = localStorage.getItem('jwt');
      axios.get('/teams', { headers: { 'Authorization': `Bearer ${jwt}`}})
        .then(response => {
          this.setState({ teams: response.data })
          console.log(this.state.teams)
        })
  }


  render() {
    return true
  }
}

export default Teams