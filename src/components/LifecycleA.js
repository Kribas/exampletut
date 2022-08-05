import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kribas'
      }
      console.log('Constructor');
    }

    static getDerivedStateFromProps(state,props) {
        console.log('GetDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

  render() {
      console.log('Render');
    return (
      <div>LifecycleA
        <LifecycleB/>
      </div>
    )
  }

}
