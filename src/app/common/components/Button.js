import React from 'react'

const Button = ({ type = 'button', className, text }) => {
  return (
    <div>
      <br />
      <button type={type} className={className}>
        {text}
      </button>
      <br />
    </div>
  )
}
export default Button
