import React from 'react'

function Show(props) {
  return (
    <div>
      
      <h1>Username is {props.user}</h1>
      <h1>Comments are {props.comments}</h1>
      <h1>Topic is {props.topic}</h1>
    </div>
  )
}

export default Show
