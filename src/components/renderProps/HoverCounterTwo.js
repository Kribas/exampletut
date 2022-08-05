import React, { Component } from 'react'

export default class HoverCounterTwo extends Component {
    
  render() {
      const {count, incrementCounter} = this.props
    return (
      <div>
          <h1 onMouseOver={incrementCounter}>Hovered {count} times</h1>
      </div>
    )
  }
}
