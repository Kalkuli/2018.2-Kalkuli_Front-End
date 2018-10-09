import React from 'react'
import './Loader.scss'

const Loader = (props) => {
    
    let style = ["lds-ring"]
    if(props.type === 'loader_reports')
        style.push('loader_reports')

    return(
        <div className={style.join(' ')}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader
