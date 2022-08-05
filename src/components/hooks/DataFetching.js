import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DataFetching() {

    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButton,setIdFromButton] = useState(1)

    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then((res) => {
            setPost(res.data)
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    },[idFromButton])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleClick} type='button'>Fetch Data</button>
        <div>{post.title}</div>
        {/* <ul>
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul> */}
    </div>
  )
}
