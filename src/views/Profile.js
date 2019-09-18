import React from 'react';
import axios from 'axios';




class Profile extends React.Component{
  render(){
    return <h1>PROFILE PAGE</h1>
  }
  state = {
    currentWeight: '',
    weightHistory: [],
    myTeams: [],
    errors: []
  }
    getPlayerObject() {
      axios
        .get('/player/2' )
        .then(response => {
          console.log(response)
        }).catch(error => {
          this.setState({ errors: error.response.data.errors })
      })
    }
}

export default Profile;
