import React from 'react'
function SelectTeam(props){
  return (
    <select
      className="form-control"
      onChange={props.handleClick}
    >
      <option value="">Please Select a Team</option>
      {
        props.theTeams.map((theTeam, i) => <option key={theTeam.id} value={theTeam.id}>{theTeam.name}</option>)
      }
    </select>
  )
}

export default SelectTeam