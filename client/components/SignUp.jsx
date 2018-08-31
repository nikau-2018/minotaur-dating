import React from 'react'

const SignUp = (props) => {
  return (
    <div>
      <form>
        <label>
          Name
          <input type = "test" name="name" />
        </label>
        <label>
          Email
          <input type = "test" name="email" />
        </label>
        <label>
          Password
          <input type = "test" name="password" />
        </label>
        <label>
          Age
          <input type = "test" name="age" />
        </label>
        <label>
          Bio
          <input type = "test" name="bio" />
        </label>
        <button
          type= "button"
          onClick = {() => props.goTo('Registration')}>
          Home
        </button>
      </form>
    </div>
  )
}

export default SignUp

// onClick call an anonymus function which calls goTo funtion
