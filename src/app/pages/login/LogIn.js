import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/components/Button'
import CheckBoxInput from '../../common/components/CheckBoxInput'
import TextInput from '../../common/components/TextInput'
import './style/Login.css'
import { useFormik } from 'formik'
import LoginSchema from '../../validation/LoginSchema'
import {email_input,password_input,checkbox_login} from "../constants/GlobalConstants"


const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      [email_input.name]: "",
      [password_input.name]: "",
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
                {...email_input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.errors.email}
              />
              
              <TextInput
                {...password_input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
              />
              
              <CheckBoxInput
                {...checkbox_login}
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
