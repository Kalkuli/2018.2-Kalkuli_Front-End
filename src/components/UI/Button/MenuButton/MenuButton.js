import React, {Fragment} from 'react'
import './MenuButton.scss'
import BackDrop from '../../BackDrop/BackDrop'
import imgReport from '../../../../assets/img/report.svg'
import imgReceipt from '../../../../assets/img/receiptWhite.svg'

const MenuButton = (props) => {
    let styleMenuButton = ["menubutton button"]
    props.rotate ? styleMenuButton.push("rotate") : null
   
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
                    <p className="options__element--text">nova nota</p>
                    <span className="options__element--circle button" onClick={props.onNewReceiptHandler}>
                        <img src={imgReceipt} alt="receipt image"/>
                    </span>            
                </div>
                <div className="options__element">
                    <p className="options__element--text">novo relatório</p>
                    <span className="options__element--circle button" onClick={props.onNewReportHandler}>
                        <img src={imgReport} alt="report image"/>
                    </span>
                </div>
            </div> 
        </Fragment>
    )
}

export default MenuButton