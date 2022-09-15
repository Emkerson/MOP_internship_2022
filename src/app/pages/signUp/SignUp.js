import React from 'react'
import HeadingElement from '../../common/components/HeadingElement'
import Button from '../../common/components/Button'
import TextInput from '../../common/components/TextInput'
import SingupSchema from '../../validation/SingupSchema'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startRegister } from '../../actions'
import { useFormik } from 'formik'
import {
  first_name_input,
  last_name_input,
  email_input,
  user_name_input,
  password_input,
  password_confirmation,
} from '../constants/GlobalConstants'

const SignUp = () => {
  const dispatch = useDispatch()
  //bool values
  const registered = useSelector((state)=>state.register.registered)
  //values
  const messageErr = useSelector((state)=>state.register.message)
  

  const formik = useFormik({
    initialValues: {
      [first_name_input.name]: '',
      [last_name_input.name]: '',
      [user_name_input.name]: '',
      [email_input.name]: '',
      [password_input.name]: '',
      [password_confirmation.name]: '',
    },
    validationSchema: SingupSchema,
    onSubmit: async (values) => {
      dispatch(startRegister(values))
    },
  })
  return (
    <div className="Body">
      <div className="card">
        {registered? 
        <div>
          <HeadingElement
            className="field ui dividing header"
            heading="Success sing up"
          />
          <h3>Your account is created</h3>
          <Link to="/login">
            <Button className="ui positive button" text="Log in" />
          </Link>
        </div>
        :
        <div className="ui form ">
          <HeadingElement
            className="field ui dividing header"
            heading="Create account"
          />
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextInput
              {...first_name_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.errors.firstName}
            />
            <TextInput
              {...last_name_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
            <TextInput
              {...email_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
            />
            <div>{messageErr && <div><br/> <div className='ui negative message'> {messageErr} </div></div>}</div>
            <TextInput
              {...user_name_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              error={formik.errors.userName}
            />
            <TextInput
              {...password_input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.errors.password}
            />
            <TextInput
              {...password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirmation}
              error={formik.errors.passwordConfirmation}
            />

            <Button
              className="ui positive button"
              text="Make account"
              type="submit"
            />
          </form>
        </div>
        }
      </div>
    </div>
  )
}

export default SignUp
