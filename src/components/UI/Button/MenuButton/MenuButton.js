import React, {Fragment} from 'react'
import './MenuButton.scss'
import imgReport from '../../../../assets/img/report.svg'
import imgReceipt from '../../../../assets/img/receiptWhite.svg'
import ReceiptAdder from '../../../Receipt/ReceiptAdder/ReceiptAdder'
import Backdrop from '../../BackDrop/BackDrop'
import { withRouter } from 'react-router-dom'
import getAllReceipts from '../../../../services/getAllReceipts'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actions'

export class MenuButton extends React.Component {
    state = {
        rotate: false,
        newReceipt: false,
        clickedMenuButton: false
    }
    render () {
        let styleMenuButton = ["menubutton button"]
        this.state.rotate ? styleMenuButton.push("rotate menubutton--open") : null
       
        let styleOptions = ["options"]
        if(!this.state.clickedMenuButton)
            styleOptions.push("firstTimeRunning")
        else if(this.state.rotate)
            styleOptions.push("open")
        else
            styleOptions.push("close")
       
        return (
            <Fragment>
                { this.state.newReceipt ? this.renderReceiptAdder() : null }
                <div className={styleMenuButton.join(' ')} onClick={this.onClickMenuButton} >
                    <h1 className="menubutton__plus base-button">+</h1>
                </div>
                <div className={styleOptions.join(' ')}>
                    <div className="options__element">
                        <p className="options__element--text">Nova Nota</p>
                        <span className="options__element--circle button" onClick={this.onNewReceiptHandler}>
                            <img src={imgReceipt} alt="nota fiscal"/>
                        </span>            
                    </div>
                    <div className="options__element">
                        <p className="options__element--text">Novo Relatório</p>
                        <span className="options__element--circle button" onClick={this.onNewReportHandler}>
                            <img src={imgReport} alt="relatorio"/>
                        </span>
                    </div>
                </div> 
            </Fragment>
        )
    }

    onConfirmOk = async () => {
        this.setState({ newReceipt: false})
        const receipts = await getAllReceipts()
        this.props.onReceiptsAdded(receipts)
    }

    onClickMenuButton = () => { 
        !this.state.clickedMenuButton ? this.setState({clickedMenuButton: true}) : null
        this.setState(prevState => ({rotate: !prevState.rotate}))
    }

    onNewReceiptHandler = () => { this.setState({ newReceipt: true }) }

    onToggleNewReceipt = () => { this.setState(prevState => ({newReceipt: !prevState.newReceipt})) }
    
    onNewReportHandler = () => { this.props.history.push({pathname: '/dashboard'}) }
    
    renderReceiptAdder = () => {
        return (
            <Fragment>
                <Backdrop show={this.state.newReceipt} click={this.onToggleNewReceipt} />
                <ReceiptAdder   onCancelHandler={this.onCloseReceiptAdder} 
                                show={this.state.newReceipt} 
                                onConfirmOk={this.onConfirmOk}/>
            </Fragment>
        )
    }

    onCloseReceiptAdder = () => { this.setState({newReceipt: false}) }
}
export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}) 
    }
}
export default withRouter(connect(null, mapDispatchToProps)(MenuButton))