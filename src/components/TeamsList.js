import React from 'react'

function TeamsList(props) {
  return(
    <div className="list-group">{
      props.theTeams ? 
      props.theTeams.map((theTeam, id) => {
        
          return (
            <div className="list-group-item" key={id}>
              <div className="d-flex">{
                theTeam.joined ?
                  <button
                    className="btn btn-warning"
                    onClick={() => props.handleLeaveTeam(theTeam.id)}
                  >-</button> :
                  <button
                    className="btn btn-primary"
                    onClick={() => props.handleJoinTeam(theTeam.id)}
                  >+</button>
                }
                <span className="ml-4">
                  {theTeam.name}
                  {
                    theTeam.joined &&
                      <span> (Rank: {theTeam.rank}) </span>
                  }
                </span>
              </div>         
            </div>
          )
        }): <p>No Teams </p>
    }</div>
  )
}
export default TeamsList