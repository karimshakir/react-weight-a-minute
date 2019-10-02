import React from 'react'

function TeamsList(props) {
  return(
    props.theTeams ? 
    props.theTeams.map((theTeam, id) => {
      
        return (
          <div key={id}>
            <p >{theTeam.name} </p>
            <button onClick={() => props.handleClick(theTeam.id)}>Join Team</button>
          </div>
        )
      }): false
    )
}
export default TeamsList