import React from 'react'
  function Alert(props) {
    if (props.alert) {
      return (
        <div className="alert alert-danger" role="alert">
              {props.alert}
        </div>
      )
    } else {
      return true
    }
  }

export default Alert