import React from 'react'

function Weights(props) {
  return (
    props.showAllWeights ? 
    props.weights.map((weight, i) => {
      if (i > 0) {
        return (
          <p key={weight.id}> {weight.value}lbs, {weight.date} </p>
        )
      }
      return null;
    }) :
    props.weights.map((weight, i) => {
      if (i > 0 && i < 3) {
        return (
          <p key={weight.id}> {weight.value}lbs, {weight.date} </p>


        )
      }
      return null;
    })
  )
}
export default Weights
