import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello"
        }
    }

    // handleClick = () => {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }

    handleClick() {
        this.setState({
            message: "Goodbye"
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
            {/* <button onClick={this.handleClick}>Click</button> */}
            <button onClick={() => this.handleClick()}>Click</button>
      </div>
    )
  }
}
