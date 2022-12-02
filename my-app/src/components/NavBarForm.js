import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleClick() {
      this.setState((prevState) => {
          console.log('prev state:', prevState.isLoggedIn)
          
          return {
              isLoggedIn: prevState.isLoggedIn === false ? true : false,
          }
      })
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <button onClick={()=> this.handleClick()}>Login</button>
        <form>{this.state.isLoggedIn ? (
                <div>
                <label htmlFor="">Username: 
                <input type="text" />
                </label>

                <label htmlFor="">Password: 
                <input type="text" />
                </label>
                <button onClick={()=> this.handleClick()}>Submit</button>
                </div>
            ): (<p></p> )}</form>
      </div>
    )
  }
}

export default NavBarForm