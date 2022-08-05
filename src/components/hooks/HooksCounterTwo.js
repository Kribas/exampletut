import React, { useState } from 'react'

export default function HooksCounterTwo() {
    const initialState = 0
    const [count,setCount] = useState(initialState)
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>Decrement</button>
    </div>
  )
}
