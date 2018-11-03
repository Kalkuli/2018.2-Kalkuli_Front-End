import React from 'react'

const InputFild = (props) => {
    return (
        <input  className={props.classe} 
                value={props.value} 
                type={props.type}
                onChange={props.onChangeHandler}
                id={props.id}
                onClick={props.click}/>
  )
}

export default InputFild;