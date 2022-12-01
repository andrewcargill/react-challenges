import React, { Component } from 'react'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    return (
      <div className='css.NavBar'>
        <h1>My Gallery</h1>
        <button></button>
      </div>
    )
  }
}

export default NavBarForm