import React, { useEffect, useState } from 'react'

export default function HookIntervalCounter() {

    const [count,setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[count])

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
