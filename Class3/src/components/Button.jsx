import React from 'react'

const Button = (props) => {
  return (
    <div className="flex justify-center mt-6" fontSize="16px">
      {props.text}
    </div>
  )
}

export default Button
