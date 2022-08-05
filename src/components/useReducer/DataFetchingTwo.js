import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'


const initialState = {
    loading: true,
    posts: {},
    error: ''
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                posts: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

export default function DataFetchingTwo() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
    

  return (
    <div>
        {state.loading ? <h1>Loading</h1> : <h1>{state.posts.title}</h1>}
    </div>
  )
}
