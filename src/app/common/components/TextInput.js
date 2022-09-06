import React from 'react'

const TextInput = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  error,
  ...rest
 
}) => {
  return (
    <div>
      <br />
      <label>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
      <br />
      {error ? <div className='ui negative message'>{error}</div> : null}
    </div>
  )
}
export default TextInput
