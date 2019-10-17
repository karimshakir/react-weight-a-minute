import React from 'react'
import WeightLost from '../components/WeightLost'

function GlobalRankings (props) {
  return (
    
  <div className="list-group">{
    props.leaders.length ?
    props.leaders.map((leader, i) => {
      return (
        <div key={i}>
            <p>
              Rank: #{ i + 1 }, Player:{leader.name},
              <WeightLost weight={leader.wt_loss} Tag="span" />
            </p>
        </div>
      )
    }) : true
  }</div>
    )
  }

export default GlobalRankings 


