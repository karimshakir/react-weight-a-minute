import React from 'react'
function SelectTeam(props){
  return(
    props.showTeams ? 
    props.theTeams.map((theTeam, i) => {
      
        return (
          <div key={theTeam.id}>
            <p >{theTeam.name} </p>
            <button onClick={() => props.handleClick(theTeam.id)}>Select Team</button>
          </div>
        )
      }): false
    )
}

export default SelectTeam