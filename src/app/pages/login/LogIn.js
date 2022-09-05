import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/components/Button'
import CheckBoxInput from '../../common/components/CheckBoxInput'
import TextInput from '../../common/components/TextInput'
import './style/Login.css'

const LogIn = () => {
  const [staySigned, setIsSigned] = useState(false);

  const handleChange = () => {
    setIsSigned(current => !current);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log(staySigned)
  }

  return (
    <div>
      <div className="Body">
        <div className="card">
          <div className="ui form ">
            <div className="ui dividing header">Log in</div>
            <form onSubmit={handleSubmit}>
              <TextInput
                name="email"
                type="email"
                label="E-mail"
                placeholder="someone@exemple.com"
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Type password"
              />
              <CheckBoxInput
                name="checkBox"
                className="ui checkbox"
                label="Keep me sign in"
                onChange={handleChange}
              />
              <Button className="ui button" type="submit" text="Log in" />
              <Link to="/signup">
                <Button className="ui button" text="Sign up" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LogIn
