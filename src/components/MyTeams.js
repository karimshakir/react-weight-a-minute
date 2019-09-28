import React from 'react'

function MyTeams (props) {
  return (
    props.showMyTeams ?
    props.myTeams.map((team, i) => {
      return (
        <div key={i}>
            <p>{team.name}</p>
            <p>{i}</p>
            <button onClick={() => props.handleClick(team.id)}>Leave Team</button>
        </div>
      )
    }) : null
  )
}

export default MyTeams

