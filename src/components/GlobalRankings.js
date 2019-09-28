import React from 'react'
function GlobalRankings (props) {
  return (

    props.playerInfo.map((player, i) => {
      return (
        <div key={i}>
            <p>Rank: #{i + 1}, Player:{player.name}                    </p>
        </div>
      )
    })
  )
}

export default GlobalRankings 