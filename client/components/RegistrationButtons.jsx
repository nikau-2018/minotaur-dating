import React from 'react'

const RegistrationButtons = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => props.goTo('signIn')}>
        Sign In
      </button>
      <button
        type="button"
        onClick={() => props.goTo('signUp')}>
        Sign Up
      </button>
    </div>

  )
}

export default RegistrationButtons

