import React, {Fragment} from 'react'
import './MenuButton.scss'

const MenuButton = (props) => {
    
    return (
        <Fragment>
            <div className="menubutton button" onClick={props.onClickMenuButton} >
                <h1 className="menubutton__plus base-button">+</h1>
            </div>
            {props.rotate ? 
                    <div className="options">
                        <div className="options__element">
                            <p className="options__element--text">nova nota</p>
                            <span className="options__element--circle button"> </span>            
                        </div>
                        <div className="options__element">
                            <p className="options__element--text">novo relatório</p>
                            <span className="options__element--circle button"></span>
                        </div>
                    </div> : null}
        </Fragment>
    )
}

export default MenuButton