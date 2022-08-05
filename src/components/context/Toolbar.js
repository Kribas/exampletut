import React, { Component } from 'react'
import ThemeButton from './ThemeButton'
import { ThemeContext, themes } from './ThemeContext'

function Toolbar(props) {
  return (
    <div>
        <ThemeButton onClick={props.changeTheme}>
          ChangeTheme
        </ThemeButton>
    </div>
  )
}



export default class MainToolbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       theme: themes.light,
       toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light: themes.dark
    }))
  }



  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content/>
        </ThemeContext.Provider>
        
      </div>
    )
  }
}

function Content() {
  return (
    <div>
      <ThemeButton/>
    </div>
  )
}

