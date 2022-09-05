import React from 'react'
import Button from '../../common/components/Button'
import CheckBoxInput from '../../common/components/CheckBoxInput'
import TextInput from '../../common/components/TextInput'

const SignUp = () => {
  return (
    <div className="Body">
      <div className="card">
        <div className="ui form ">
          <div className="field ui dividing header">Create account</div>
          <form>
            <TextInput
              name="first-name"
              label="Name"
              type="text"
              placeholder="Donald"
            />
            <TextInput
              name="last-name"
              label="Last name"
              type="text"
              placeholder="Duck"
            />
            <TextInput
              name="email"
              label="E-mail"
              type="email"
              placeholder="someone@exemple.com"
            />
            <TextInput
              name="username"
              label="Username"
              type="text"
              placeholder="Type username"
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
              placeholder="Type password"
            />
            <TextInput
              name="confirm-password"
              label="Confirm password"
              type="password"
              placeholder="Confirm password"
            />
            <CheckBoxInput
              name="check-box"
              className="ui checkbox"
              label="Do you want to create an account"
            />
            <Button className="ui button" text="Make account" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
