import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/components/Button'
import CheckBoxInput from '../../common/components/CheckBoxInput'
import TextInput from '../../common/components/TextInput'
import './style/Login.css'
import { useFormik } from 'formik'
import LoginSchema from '../../validation/LoginSchema'


const LogIn = () => {
  /*
  const [staySigned, setIsSigned] = useState(false)
  const handleChangeCheckBox = () => {
    setIsSigned((current) => !current)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log(staySigned)
  }*/
  
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  

  return (
    <div>
      <div className="Body">
        <div className="card">
          <div className="ui form ">
            <div className="ui dividing header">Log in</div>
            <form onSubmit={formik.handleSubmit} autoComplete="off" >
              <TextInput
                id="email"
                name="email"
                type="email"
                label="E-mail"
                placeholder="someone@exemple.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.errors.email}
              />
              
              <TextInput
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Type password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
              />
              
              <CheckBoxInput
                name="checkBox"
                className="ui checkbox"
                label="Keep me sign in"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkBox}
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
