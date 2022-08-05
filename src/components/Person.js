import React from 'react'

export default function Person({person}) {
  return (
    <div>
        <h2>Iam {person.name}. Iam {person.age} old. I know {person.skill}</h2>
    </div>
  )
}
