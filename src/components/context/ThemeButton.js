import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'


export default class ThemeButton extends Component {
    
  render() {
    return (
      <div>
      <ThemeContext.Consumer>
        {({theme,toggleTheme}) => (
          <button
            onClick={toggleTheme}
           style={{
            backgroundColor: theme.background
          }}/>
        )}
      </ThemeContext.Consumer>
          
      </div>
    )
  }
}

ThemeButton.contextType = ThemeContext
