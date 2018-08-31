import React from 'react'

const SignUp = (props) => {
  return (
    <div>
      <form>
        <label>
          Name
          <input type = "text" name="name"/>
        </label>
        <label>
          Email
          <input type = "text" name="email" />
        </label>
        <label>
          Password
          <input type = "text" name="password" />
        </label>
        <label>
          Age
          <input type = "text" name="age" />
        </label>
        <label>
          Bio
          <input type = "text" name="bio" />
        </label>
        <button type="submit" onClick = {evt => props.submitFunc}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp

// onClick call an anonymus function which calls goTo funtion
