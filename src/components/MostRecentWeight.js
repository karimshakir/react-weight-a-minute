import React from 'react'

function MostRecentWeight(props) {
  return (
    <p>
      Current Weight:
      {
        props.weights.length 
          ? <span> { props.weights[0].value }lbs </span>
          : <span> no weights entered </span>
      }
    </p>
  )
}

export default MostRecentWeight