import React from 'react'

const SignIn = (props) => {
  return (
    <div>
      <form>
        <label>
          Name
          <input type="test" name="name" />
        </label>
        <label>
          Password
          <input type="test" name="password" />
        </label>
        <button
          type="button"
          onClick={() => props.goTo('Registration')}>
          Home
        </button>
      </form>
    </div>
  )
}

export default SignIn
