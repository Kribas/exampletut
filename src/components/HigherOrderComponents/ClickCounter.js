import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    constructor(props) {
      super(props)
    }

  render() {
      const { count, incrementCounter } = this.props
    return (
      <div>
          <button onClick={incrementCounter}>{this.props.name}Click button {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,5)
