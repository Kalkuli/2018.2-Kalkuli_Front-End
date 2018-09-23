import React from 'react'
import './Input.scss'

const Input = (props) => {

  let styles = ["input"]
  if(props.width === "large") 
    styles.push("large")
  else if(props.width === "small")
    styles.push("small")

  return (
    <input onChange={props.onChangeHandler} className={styles.join(' ')} value={props.value} />
  )
}

export default Input