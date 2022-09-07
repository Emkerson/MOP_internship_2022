import React from 'react'
import Button from '../../common/components/Button'
import TextInput from '../../common/components/TextInput'
import SingupSchema from "../../validation/SingupSchema"
import { useFormik } from 'formik'
import {first_name_input,last_name_input,email_input,user_name_input,password_input,password_confirmation} from "../constants/GlobalConstants"

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      [first_name_input.name]:"",
      [last_name_input.name]:"",
      [user_name_input.name]:"",
      [email_input.name]: "",
      [password_input.name]: "",
      [password_confirmation.name]:"",
    },
    validationSchema: SingupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className="Body">
      <div className="card">
        <div className="ui form ">
          <div className="field ui dividing header">Create account</div>
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
            
            <Button className="ui button" text="Make account" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
