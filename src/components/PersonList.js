import React from 'react'
import { personData } from '../data'
import Person from './Person'

function PersonList() {
  return (
    <div>
      {
        personData.map((person, id) => (
          <Person key={id} person={person}/>
        ))
      }
    </div>
  )
}

export default PersonList
