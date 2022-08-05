import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoading: false,
         buttonText: 'Login'
      }
    }

    handleClick = () => {
        this.setState({
            isLoading: true,
            buttonText: 'LogOut'
        })
    }

  render() {
    return (
        <div>
            {this.state.isLoading ? <div>Welcome Kribas</div> : <div>Welcome Guest</div>}
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
    )
  }
}
