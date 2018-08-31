import React from 'react'

const SignIn = (props) => {
  return (
    <div className='sign'>
      <form>
        <label>
          Name
          <input type="test" name="name" />
        </label>
        <label>
          Password
          <input type="test" name="password" />
        </label>
        <button className='homebutton'
          type="button"
          onClick={() => props.goTo('main')}>
          Home
        </button>
      </form>
    </div>
  )
}

export default SignIn
