import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function DataFetchingOne() {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [posts,setPosts] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            setLoading(false)
            setPosts(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPosts({})
            setError('Something went wrong!')
        })
    },[])

  return (
    <div>
        {loading ? <h1>Loading...</h1> : <h1>{posts.title}</h1>}
        {error ? error: null}
    </div>
  )
}
