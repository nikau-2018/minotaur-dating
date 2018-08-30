import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Others from './Others'
/* import Registration from './Registration'
import RegistrationButton from './RegistrationButton'
import SignIn from './SignIn'
import SignUp from './SignUp' */

const App = props => {
  return (
    <Router>
      <div>
        <Route path= "/" component={Nav} />
        <Route path="/others" component= {Others} />
        {/* <Route path='/' component={Registration} />
        <Route path='/' component={RegistrationButton} />
        <Route path='/' component={SignIn} />
        <Route path='/' component={SignUp} /> */}
      </div>
    </Router>
  )
}

export default App
