import React from 'react'
import { useReducer } from 'react'


const initialState = {
    firstCount: 0
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCount: state.firstCount + action.value}
        case 'decrement':
            return {...state, firstCount: state.firstCount - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function CounterTwo() {

    const [count,dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        Count : {count.firstCount}
        <div>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    </div>
  )
}
