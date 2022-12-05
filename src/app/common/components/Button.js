import React from 'react'

const Button = ({ type = 'button', className, text }) => {
  return (
    <div>
      <button type={type} className={className}>
        {text}
      </button>
    </div>
  )
}
export default Button
