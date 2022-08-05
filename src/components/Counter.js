import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

  render() {
    return (
      <div>
      <h1>Counter - {this.state.counter}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
