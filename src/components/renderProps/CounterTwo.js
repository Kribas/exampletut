import React, { Component } from 'react'

export default class CounterTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
  
       incrementCounter = () => {
          this.setState(prevState => {
              return {count: prevState.count + 1}
          })
      }

  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.incrementCounter)}
      </div>
    )
  }
}
