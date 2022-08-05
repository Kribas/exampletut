import React from 'react'
import './FancyBorder.css'

export default function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
        {props.children}
    </div>
  )
}
