import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Others from './Others'
import Main from './Main'
import Registration from './Registration'

/* import Registration from './Registration'
import RegistrationButton from './RegistrationButton'
import SignIn from './SignIn'
import SignUp from './SignUp' */

const App = props => {
  return (
    <div>
      <h1>Minotaur Dating</h1>
      <img src= './images/girl.png' />
      <div className = 'container'><Registration /></div>
      <div><Router>
        <Route path="/others" component= {Others} />
      </Router>
      </div>
    </div>
  /* //   <Router>
    //   <div>
    //     <Route path= "/" component={Nav} />
    //     <Route path="/" component= {Main} />

    //     {/* <Route path='/' component={Registration} />
    //     <Route path='/' component={RegistrationButton} />
    //     <Route path='/' component={SignIn} />
    //     <Route path='/' component={SignUp} /> */
    //   </div>
    // </Router> */}
  )
}

export default App
