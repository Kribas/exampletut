import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "Welcome Visitor"}
    }

     handleClick = () => {
        this.setState({
            text: "Thank You for subscribing"
        })
    }
     

  render() {
    
    return (
        <>
            <h1>
                {this.state.text}
            </h1>
            <button onClick={() => this.handleClick()}>Subscribe</button>
        </>
      
    )
  }
}
