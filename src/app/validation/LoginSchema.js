import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email address.'),

  password: Yup.string()

    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password must include at least 5 characters.'),
})
export default LoginSchema
