// import React, { Component } from 'react'

// export default class Forms extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          value: ''
//       }
//     }

//     handleChange = (event) => {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         alert(`A name was submitted ${this.state.value}`)
//         event.preventDefault()
//     }

//   render() {
//     return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" name='name' onChange={this.handleChange}/>
//             </label>
//             <input type="submit" value="Submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class Forms extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          value: ''
//       }

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         alert("An essay was submitted " + this.state.value)
//         event.preventDefault();
//     }
//   render() {
//     return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//               <label>
//                   Essay:
//                   <textarea></textarea>
//               </label>
//               <input onChange={this.handleChange} type="submit" value="Submit"></input>
//           </form>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: 'Coconut'
      }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Your favourite flavour is ${this.state.value}`)
        event.preventDefault()
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>
                Pick your favourite flavour:
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }
}



