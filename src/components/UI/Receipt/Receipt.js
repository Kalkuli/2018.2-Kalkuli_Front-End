import React from 'react'
import './Receipt.scss'

const Receipt = (props) => {

    let style = ["receipt"]
    if(props.size === "small")
        style.push("receipt--small")
    else if(props.size === "large")
        style.push("receipt--large")
    return (
        <div className={style.join(' ')} onClick={props.onClickHandler}>
            {props.children}
        </div>
    )
}

export default Receipt