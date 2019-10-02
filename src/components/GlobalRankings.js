import React from 'react'
function GlobalRankings (props) {
  return (
    props.leaders.length ?
    props.leaders.map((leader, i) => {
      return (
        <div key={i}>
            <p>Rank: #{i + 1}, Player:{leader.name},Total Weight Loss: {leader.wt_loss}lbs</p>
        </div>
      )
    }) : <p>Choose Team Below</p>
    )
  }

export default GlobalRankings 