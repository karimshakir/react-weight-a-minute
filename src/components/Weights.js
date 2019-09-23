import React from 'react'

function Weights(props) {
  return (
    props.showAllWeights ? 
    props.weights.map((weight, i) => {
      if (i > 0) {
        return (
          <p key={weight.id}> {weight.value} </p>
        )
      }
    }) :
    props.weights.map((weight, i) => {
      if (i > 0 && i < 3) {
        return (
          <p key={weight.id}> {weight.value} </p>
        )
      }
      return null;
    })
  )
}
export default Weights