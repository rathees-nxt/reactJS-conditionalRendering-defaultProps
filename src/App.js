import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  /* using function
  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  } 
  inside return we have to use {this.renderAuthButton}

  */

  /* element variable
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    } 
    inside return we have to use {authButton} */

  /* 
  
  // ternary operator
  we have to use inside the  return
  {isLoggedIn ? (
    <button type="button">Logout</button>
  ) : (
    <button type="button">Login</button>
  )} */

  /* logical operator 
    we have to use inside the  return
    {isLoggedIn && <button type="button">Logout</button>}
    {!isLoggedIn && <button type="button">Login</button>}
  
  */

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="hello" name="rathees" />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
