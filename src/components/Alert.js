import React from 'react'

function Alert(props) {
  if (props.alert.length) {
    return (
      <div className="alert alert-danger" role="alert">
          {props.alert.join(', ')}
      </div>
    )
  } else {
    return null;
  }
}

export default Alert