import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>name is {person.name}, age is {person.age} and skils are {person.skills}</h1>
    </div>
  )
}
export default Person
