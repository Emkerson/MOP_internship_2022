import React from 'react'

const CheckBoxInput = ({ className, label, name, onChange}) => {
  return (
    <div className={className}>
      <br />
      <input id={name} name={name} type="checkbox" onChange={onChange} />
      <label htmlFor={name}>{label}</label>
      <br />
    </div>
  )
}
export default CheckBoxInput
