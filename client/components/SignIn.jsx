import React from 'react'

const SignIn = (props) => {
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
          Age
          <input type = "test" name="age" />
        </label>
        <button
          type= "button"
          onClick = {() => props.goTo('Registration')
        </button>
      </form>
    </div>
  )
}

export default SignIn
