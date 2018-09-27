import React from 'react'
import './Input.scss'
import editImage from '../../../assets/img/baseline-edit-24px.svg'

const Input = (props) => {

  let styles = ["input-area__input"]
  if(props.width === "large") 
    styles.push("large") 
  else if(props.width === "small")
    styles.push("small")

  return (
    <div className="input-area">
      <input className={styles.join(' ')} onChange={props.onChangeHandler} value={props.value} />
      <img onClick={props.onClickHandler} className="input-area__edit-image" src={editImage} />
    </div>
  )
}


export default Input