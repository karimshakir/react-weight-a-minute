import React from 'react';
import Axios from 'axios';

class Home extends React.Component {

  state = {
    query: '',
    players: [],
    errors: ''
  }

  componentDidMount() {

  }

  getPlayers() {
    Axios
      .get(`/players/2`)
      .then(response => {
        const players = response.data ? response.data : [];
        if (!players.length) {
          const message = 'No Current Players, Be the first to sign up!';
          this.setState({ message });
        }
        this.setState({ books });
      }).catch(error => {
        console.log(error);
        this.setState({ errors: "Error making Request!" });
      });
  }
}

      methods: {
      getCircumstances: function() {
        if (this.newOccurrence.addiction_id) {
          axios
            .get("/api/addiction_occurrences?unique_circumstances=true&addiction_id=" + this.newOccurrence.addiction_id)
            .then(response => {
              this.pastAddictionOccurences = response.data;
            });
        }
      }