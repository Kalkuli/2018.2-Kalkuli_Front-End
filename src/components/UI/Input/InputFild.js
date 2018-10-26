import React from 'react'

const InputFild = (props) => {
  return (
      <label>
        {props.children}
        <input  className={props.s} 
                value={props.value} 
                type={props.type ? props.type : "text" }
                onChange={props.onChangeHandler}>
        
        </input>
      </label>
  )
}

export default InputFild;