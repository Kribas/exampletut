import React, { useEffect, useState } from 'react'

export default function HookMouse() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("use effect called");
        document.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code');
            document.removeEventListener('mousemove', logMousePosition)
        }

    },[])

  return (
    <div>HookMouse X: {x} Y: {y}</div>
  )
}
