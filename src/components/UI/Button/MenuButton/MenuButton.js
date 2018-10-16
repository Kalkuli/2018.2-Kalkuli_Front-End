import React, {Fragment} from 'react'
import './MenuButton.scss'
import imgReport from '../../../../assets/img/report.svg'
import imgReceipt from '../../../../assets/img/receiptWhite.svg'

const MenuButton = (props) => {
    let styleMenuButton = ["menubutton button"]
    props.rotate ? styleMenuButton.push("rotate menubutton--open") : null
   
    let styleOptions = ["options"]
    if(!props.clickedMenuButton)
        styleOptions.push("firstTimeRunning")
    else if(props.rotate)
        styleOptions.push("open")
    else
        styleOptions.push("close")
   
    return (
        <Fragment>
            <div className={styleMenuButton.join(' ')} onClick={props.onClickMenuButton} >
                <h1 className="menubutton__plus base-button">+</h1>
            </div>
            <div className={styleOptions.join(' ')}>
                <div className="options__element">
                    <p className="options__element--text">Nova Nota</p>
                    <span className="options__element--circle button" onClick={props.onNewReceiptHandler}>
                        <img src={imgReceipt} alt="nota fiscal"/>
                    </span>            
                </div>
                <div className="options__element">
                    <p className="options__element--text">Novo Relatório</p>
                    <span className="options__element--circle button" onClick={props.onNewReportHandler}>
                        <img src={imgReport} alt="relatorio"/>
                    </span>
                </div>
            </div> 
        </Fragment>
    )
}

export default MenuButton