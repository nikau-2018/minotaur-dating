import React from 'react'
import {getUser/* , getAllUsers */} from '../apiClient'

class Others extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
/*     this.state = {
      users: []
    } */
  }

  componentDidMount () {
    getUser()
      .then(user => {
        this.setState({user})
      })
/*     getAllUsers()
    .then(user => {
      this.setState({users})
    }) */
  }

  render () {
    console.log('this.state.user', this.state.user.name)
    return (
      <div className='others'>
        <h1>Testing Others API</h1>
        {/* Individual user */}
        <div> {this.state.user.name}</div>
          {/* All users          {this.state.users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))} */}
        </div>
      </div>
    )
  }
}

export default Others
