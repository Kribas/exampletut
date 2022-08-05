import React, { Component } from 'react'

export default class ClickCounterTwo extends Component {

    

  render() {
      const {count, incrementCounter} = this.props
    return (
      <div>
          <button onClick={incrementCounter}>Click {count} times</button>
      </div>
    )
  }
}
