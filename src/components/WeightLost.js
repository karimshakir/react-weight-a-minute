import React from 'react'

function WeightLost({weight, Tag}) {
  if (weight >= 0) {
    return <Tag>Total <span style={{color: 'blue'}}> Weight Loss </span>: {weight}lbs</Tag>;
  }
  return <Tag>Total <span style={{color: 'red'}}> Weight Gain </span>: {Math.abs(weight) }lbs</Tag>;
}

export default WeightLost