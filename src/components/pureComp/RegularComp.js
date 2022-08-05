import React, { Component } from 'react'

export default class RegularComp extends Component {
  render() {
    console.log(this.props.name);

    return (
      <div>RegularComp {this.props.name}</div>
    )
  }
}
