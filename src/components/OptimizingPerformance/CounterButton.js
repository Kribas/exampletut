import React, { Component } from 'react'

export default class CounterButton extends React.PureComponent {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
    }

    // shouldComponentUpdate(nextProps,nextState) {
    //     if(this.props.color !== nextProps ) {
    //         return true;
    //     }
    //     if(this.state.count !== nextState) {
    //         return true;
    //     } else {
    //         return false
    //     }
    // }

  render() {
    return (
      <div>
          <button 
            color={this.props.color}
            onClick={() => this.setState((state) => ({count: state.count + 1}))}>
            Count: {this.state.count}
          </button>
      </div>
    )
  }
}
