import React from 'react'
function GlobalRankings (props) {
  return (

    props.playerInfo.map((player, i) => {
      return (
        <div key={i}>
            <p>Player: {player.name},          Rank: #{i + 1}</p>
        </div>
      )
    }),

    props.showTeams ? 
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

export default GlobalRankings 