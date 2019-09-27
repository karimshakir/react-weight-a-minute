import React from 'react'
import axios from 'axios'
class LeaderBoard extends React.Component {


  state = {
    ranking: [],
    totalWtLoss: ''
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    axios.get('/players', { headers: { 'Authorization': `Bearer ${jwt}`}})
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
  return true
  } 
}

export default LeaderBoard