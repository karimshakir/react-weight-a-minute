import React from 'react'

function MyTeams (props) {
  return (
    props.showMyTeams ?
    props.myTeams.map((team, i) => {
      return (
        <div key={i}>
            <p>{team.name} <span>Rank: {team.rank}</span></p>
            <button onClick={() => props.handleClick(team.id)}>Leave Competition</button>

            <div>
              <br></br>
              <br></br> 
            </div>
        </div>
      )
    }) : null
  )
}

export default MyTeams

