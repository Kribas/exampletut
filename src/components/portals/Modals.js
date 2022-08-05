import React, { Component } from 'react'
import { ReactDOM } from 'react'


export default class Modals extends Component {

    constructor(props) {
      super(props)
    
    }

  render() {
    return (
      ReactDOM.createPortal(
          '<div>',
          document.getElementById('modal-root')
      )
    )
  }
}
