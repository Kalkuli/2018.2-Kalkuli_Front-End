import React from 'react'
import './Input.scss'

const Input = (props) => {

  return (
    <input onChange={props.onChangeHandler} className="input" placeholder={props.placeholder} />
  )
}

export default Input