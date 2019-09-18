import React from 'react';
import { Redirect } from "@reach/router";

class Home extends React.Component {

  submitWeight = () => {
    console.log("submitWeight button is working")
    return <Redirect to="profile" noThrow/>

  }
  render(){
    return <button onClick={this.submitWeight}>Submit</button>
  }
}

export default Home