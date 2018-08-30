import React, { Component } from 'react'

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
    this.goTo = this.goTo.bind(this)
  }
goTo(location) {
  this.setState({ location })
}
display(location) {
  switch(location) {
    case '':
  }
}
  }
}
