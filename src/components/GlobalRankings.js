import React from 'react'
function GlobalRankings (props) {
  return (
    
  <div className="list-group">{
    props.leaders.length ?
    props.leaders.map((leader, i) => {
      return (

        <div  key={i}>
            <p> Rank: #{i + 1}, Player:{leader.name},Total Weight Loss: {leader.wt_loss}lbs </p>
        </div>

      )
    }) : <p>Choose Team Below</p>
  }</div>
    )
  }

export default GlobalRankings 






// function TeamsList(props) {
//   return(
//     <div className="list-group">{
//       props.theTeams ? 
//       props.theTeams.map((theTeam, id) => {
        
//           return (
//             <div className="list-group-item" key={id}>
//               <div className="d-flex">{
//                 theTeam.joined ?
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => props.handleLeaveTeam(theTeam.id)}
//                   >-</button> :
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => props.handleJoinTeam(theTeam.id)}
//                   >+</button>
//                 }
//                 <span className="ml-4">{theTeam.name}</span>
//               </div>         
//             </div>
//           )
//         }): <p>No Teams </p>
//     }</div>
//   )
// }
// export default TeamsList


// import React from 'react'
// function GlobalRankings (props) {
//   return (
//     props.leaders.length ?
//     props.leaders.map((leader, i) => {
//       return (

//         <div  key={i}>
//             <p> Rank: #{i + 1}, Player:{leader.name},Total Weight Loss: {leader.wt_loss}lbs </p>
//         </div>

//       )
//     }) : <p>Choose Team Below</p>
//     )
//   }

// export default GlobalRankings 