import * as Yup from 'yup'

const SingupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter first name.'),

  lastName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter last name.'),

  userName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter username.'),

  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email address.'),

  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password must include at least 5 characters.'),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Passwords must match'),
})
export default SingupSchema
