import React from 'react'

const InputFild = (props) => {
    return (
        <input  className={props.s} 
                value={props.value} 
                type={props.type ? props.type : "text" }
                onChange={props.onChangeHandler}
                id={props.id}/>
  )
}

export default InputFild;