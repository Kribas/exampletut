import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends Component {
    constructor(props) {
      super(props)
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }
  render() {
      const temperature = this.props.temperature 
      const scale = this.props.scale
    return (
      <div>
          <fieldset>
              <legend>Enter temperature in {scaleNames[scale]}</legend>
              <input onChange={this.handleChange} value={temperature}/>
          </fieldset>
      </div>
    )
  }
}
