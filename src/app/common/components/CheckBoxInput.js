import React from 'react'

const CheckBoxInput = ({ className, label, name, onChange, ...rest}) => {
  return (
    <div className={className}>
      <br />
      <input id={name} name={name} type="checkbox" onChange={onChange} {...rest}/>
      <label htmlFor={name}>{label}</label>
      <br />
    </div>
  )
}
export default CheckBoxInput
