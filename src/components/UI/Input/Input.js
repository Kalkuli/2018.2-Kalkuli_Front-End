import React from 'react'
import './Input.scss'
import editImage from '../../../assets/img/baseline-edit-24px.svg'

const Input = (props) => {

  let styles = ["input-area__input"]
  if(props.editable) 
    styles.push("input-area__input--edit") 
  else
    styles.push("input-area__input--no-edit")
  return (
    <div className="input-area">
      <input  className={styles.join(' ')} 
              value={props.value} 
              type="text"
              onChange={props.onChangeHandler} 
              disabled={!props.editable}/>
      <img onClick={props.onClickHandler} className="input-area__edit-image" src={editImage} alt="edit" />
    </div>
  )
}

export default Input