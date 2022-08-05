import React, { useEffect, useState } from 'react'


export default function Example() {

    const [persons,setPersons] = useState([])

    const fetchData = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        let data = await fetch(url)
        let parsedData = await data.json()
        setPersons(parsedData)
    }

    useEffect(() => {
        fetchData()
    })

  return (
    <div>
       {persons.map((person) => (
           <h1>{person.name}</h1>
       ))}
    </div>
  )
}
