import React from 'react'
import {getAllUsers, addUser} from '../apiClient'

class Others extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    // addUser(null)
    getAllUsers()
      .then(users => {
        this.setState({users})
      })
    
  }

  render () {
    // console.log('this.state.user', this.state.user.name)
    return (
      <div className='others'>
        <h1>Testing Others API</h1>
        {this.state.users.map(users => (
          <div key={users.id}>{users.name}</div>
        ))}
      </div>
    )
  }
}

export default Others
