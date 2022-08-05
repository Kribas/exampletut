import React, { Component } from 'react'
import Person from './Person'

export default class PersonList extends Component {

    persons = [
        {
            id: 1,
            name: 'Kribas',
            age: '26',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kushal',
            age: '26',
            skill: 'Dot Net'
        },
        {
            id: 3,
            name: 'Bruce',
            age: '36',
            skill: 'Angular'
        },

    ]

  render() {

    const PersonList = this.persons.map(person => <Person key={person.id} person={person}/>)

    return (
      <div>{PersonList}</div>
    )
  }
}
