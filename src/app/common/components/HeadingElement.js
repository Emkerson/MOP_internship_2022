import React from 'react'

const HeadingElement = ({ heading, className }) => {
  return (
    <div className={className}>
      <h1>{heading}</h1>
    </div>
  )
}
export default HeadingElement
