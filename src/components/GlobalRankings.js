import React from 'react'
function GlobalRankings (props) {
  return (
    props.playerInfo.map((player, i) => {
      return (
        <div key={i}>
            <p>Player: {player.name},          Rank: #{i + 1}</p>
        </div>
      )
    }) 
  )
}

export default GlobalRankings