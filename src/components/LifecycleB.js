import React, { Component } from 'react'

export default class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kribas'
      }
      console.log('constructor');
    }

    static getDerivedStateFromProps(state,props) {
        console.log('getDerivedStatefromProps');
        return null
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

  render() {
      console.log('Render');
    return (
      <div>LifecycleB</div>
    )
  }
}
