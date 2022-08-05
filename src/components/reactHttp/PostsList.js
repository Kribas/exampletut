import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PostsList() {

    const [posts,setPosts] = useState([])

    const getPosts = async () => {
       const request = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(request.data)
        return request
    }

    useEffect(() => {
        getPosts()
    },[])

  return (
    <div>
        {posts.map((post) => (
            <h4>{post.title}</h4>
        ))}
    </div>
  )
}
