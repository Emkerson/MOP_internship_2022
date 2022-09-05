import React from 'react'

const TextInput = ({ name, label, type = 'text', placeholder }) => {
  return (
    <div>
      <br />
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} />
      <br />
    </div>
  )
}
export default TextInput
