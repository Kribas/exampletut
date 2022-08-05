import React, { Component, PureComponent } from 'react'
import MemoComp from '../memoComp/MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export default class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kribas'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Kribas'
            })
        },2000)
    }

  render() {
    console.log('********Parent Component*******');
    return (
        
      <div>
        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}
