import React, { Component } from 'react'
import Modals from './Modals'
import Child from '../portals/Child'

export default class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick = () => {
        this.setState((state) => ({
            count: state.count + 1
        }))
    }

  render() {
    return (
      <div onClick={this.handleClick}>
          <p>Number of Clicks: {this.state.count}</p>
          <Modals>
              <Child/>
          </Modals>
      </div>
    )
  }
}
