import React from 'react'

function TeamsList(props) {
  return(

    props.theTeams ? 
    props.theTeams.map((theTeam, i) => {
      
        return (
          <div key={theTeam.id}>
            <p >{theTeam.name} </p>
            <button onClick={() => props.handleClick(theTeam.id)}>Join Team</button>
          </div>
        )
      }): <p>No existing Teams</p>
    )
}
export default TeamsList