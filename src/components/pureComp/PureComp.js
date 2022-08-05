import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log(this.props.name);

    return (

      <div>PureComp {this.props.name}</div>
    )
  }
}
