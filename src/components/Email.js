import React,{useState, useEffect} from 'react'

export default function Email() {
  const [emails,setEmails] = useState([])

    const fetchData = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        let data = await fetch(url)
        let parsedData = await data.json()
        setEmails(parsedData)
    }

    useEffect(() => {
        fetchData()
    })
  return (
    <div>
       {emails.map((email) => (
           <h1>{email.email}</h1>
       ))}
    </div>
  )
}
