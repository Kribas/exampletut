import React, { useState } from 'react'
import HookMouse from './HookMouse'

export default function MouseContainer() {

    const [display,setDisplay] = useState(true)

    
    const toggleDisplay = () => {
        setDisplay(!display)
    }



  return (
    <div>
        <button onClick={toggleDisplay}>Display</button>
        {display && <HookMouse/>}
    </div>
  )
}
