import React, { Component } from 'react'

export default class ClassClick extends Component {

    handleClick() {
        console.log("Button Clicked");
    }
    
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
