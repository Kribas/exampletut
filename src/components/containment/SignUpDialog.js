import React, { Component } from 'react'
import Dialog from './Dialog'

export default class SignUpDialog extends Component {
    constructor(props) {
      super(props)
      this.state = {
         login: ''
      }
    }

    handleChange = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    handleClick = () => {
        alert(`Welcome aboard, ${this.state.login}!`)
    }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>
            Sign me up!
        </button>
      </Dialog>
    )
  }
}
