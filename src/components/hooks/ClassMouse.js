import React, { Component } from 'react'

export default class ClassMouse extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        console.log('component did mount called');
        document.addEventListener('mousemove', this.logMousePosition)
    }

  render() {
    return (
      <div>ClassMouse X: {this.state.x} Y: {this.state.y}</div>
    )
  }
}
