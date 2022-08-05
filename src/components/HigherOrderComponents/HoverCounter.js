import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    constructor(props) {
      super(props)
    }

  render() {
      const {count, incrementCounter} = this.props
    return (
      <div>
          <h1 onMouseOver={incrementCounter}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter,2)

