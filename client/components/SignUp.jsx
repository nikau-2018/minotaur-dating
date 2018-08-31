import React from 'react'

const SignUp = (props) => {
  return (
    <div>
      <form method="post" action="http://192.168.1.156:3000/api/register">
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
        <button>Register</button>
      </form>
    </div>
  )
}

export default SignUp

// onClick call an anonymus function which calls goTo funtion
