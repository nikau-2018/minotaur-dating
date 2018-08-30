import React from 'react'
import {getUser} from '../apiClient'

class Others extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount () {
    getUser()
      .then(user => {
        this.setState({user})
      })
  }

  render () {
    console.log('this.state.user', this.state.user.name)
    return (
      <div className='others'>
        <h1>Testing Others API</h1>
        <div> {this.state.user.name}
          {/*           {this.state.users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))} */}
        </div>
      </div>
    )
  }
}

export default Others
