import React from 'react'
import { Link } from 'react-router-dom'
import HeadingElement from '../../common/components/HeadingElement'
import Button from '../../common/components/Button'
import CheckBoxInput from '../../common/components/CheckBoxInput'
import TextInput from '../../common/components/TextInput'
import '../style/Forms.css'
import { useFormik } from 'formik'
import LoginSchema from '../../validation/LoginSchema'
import { startLogin } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

import {
  email_input,
  password_input,
  checkbox_login,
} from '../constants/GlobalConstants'

const LogIn = () => {

  const dispatch = useDispatch()
  //bool values
  const loggedIn = useSelector((state) => state.login.loggedIn)
  //values
  const messageErr = useSelector((state)=>state.login.message)

  const formik = useFormik({
    initialValues: {
      [email_input.name]: '',
      [password_input.name]: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      dispatch(startLogin(values))
    },
  })

  return (
    <div>
      <div className="Body">
        <div className="card">
          {loggedIn? 
          <div>
            <HeadingElement className="ui dividing header" heading="Login success" />
            <h3>Enjoy with movies</h3>
            <Link to="/movies">
              <Button className="ui primary button" text="Go" />
            </Link>
          </div> 
          :
          
          <div className="ui form">
            <HeadingElement className="ui dividing header" heading="Log in" />
            <form onSubmit={formik.handleSubmit} autoComplete="off">
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
              <Button
                className="ui positive button"
                type="submit"
                text="Log in"
              />
              <Link to="/signup">
                <Button className="ui primary button" text="Sign up" />
              </Link>
            </form>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
export default LogIn
