import React from 'react'

function MyTeam (props) {
  return (
    props.showMyTeams ?
    props.myTeams.map((team, i) => {
      return (
        <div key={i}>
            <p>{team.name}</p>
        </div>
      )
    }) : null
  )
}

export default MyTeam