import React from 'react'
function GlobalRankings (props) {
  return (
    props.leaders.length ?
    props.leaders.map((leader, i) => {
      return (
        <div key={i}>
            <p>Rank: #{i + 1}, Player:{leader.name}</p>
        </div>
      )
    }) : <p>No Player Info yet</p>
    )
  }

export default GlobalRankings 