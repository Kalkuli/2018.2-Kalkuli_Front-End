import React from 'react'

const InputLogin = (props) => (
  <input  className={props.style} 
          value={props.value}
          type={props.type}
          onChange={props.onChangeHandler}/>
)

export default InputLogin