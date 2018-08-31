import React, {Component} from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'
import RegistrationButtons from './RegistrationButtons'
import Main from './Main'

class Registration extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: ''
    }
    this.goTo = this.goTo.bind(this) // bind main class 'this' to the method
  }
  goTo (location) {
    this.setState({location})
  }
  display (location) {
    switch (location) {
      case '':
      default:
        return <RegistrationButtons goTo={this.goTo} />
      case 'signUp':
        return <SignUp />
      case 'signIn':
        return <SignIn goTo={this.goTo} />
      case 'main':
        return <Main />
    }
  }
  render () {
    return (
      <div>
        {this.display(this.state.location)}
      </div>
    )
  }
}

export default Registration
