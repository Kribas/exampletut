import React from 'react'

export default function FunctionClick() {

    function handleClick() {
        console.log("Button Clicked");
    }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
