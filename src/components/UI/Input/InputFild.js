import React from 'react'

const InputFild = (props) => {
    return (
        <input  className={props.style} 
                value={props.value} 
                type={props.type}
                onChange={props.onChangeHandler}
                id={props.id}
                />
  )
}

export default InputFild;