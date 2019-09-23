import React from 'react'

function TeamsList(props) {
  return(

    props.theTeams ? 
    props.theTeams.map((theTeam, i) => {
      
        return (
          <p key={theTeam.id}>{theTeam.name} </p>
        )
      }): <p>No existing Teams</p>
    )
}
export default TeamsList