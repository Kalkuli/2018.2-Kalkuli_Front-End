import React, { Component, Fragment } from 'react'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import ReceiptAdder from '../../Receipt/ReceiptAdder/ReceiptAdder'
import Backdrop from '../../UI/BackDrop/BackDrop'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import getAllReceipts from '../../../services/getAllReceipts'

const smallDevice = window.matchMedia('(max-width: 800px)').matches

export class ReceiptList extends Component {

    state = {  
        loaded: false,
        rotate: false,
        newReceipt: false,
        clickedMenuButton: false
    }

    componentDidMount() {
        this.fetchReceipts()
    }

    render() {
        return (
            <div >
                <Navbar/>
                { this.state.newReceipt ? this.renderReceiptAdder() : null }
                { this.state.loaded && <List    receipts={this.props.receipts} 
                                                onGetAllReceipts={this.fetchReceipts}
                                                isSmall={smallDevice} /> }
                <MenuButton     rotate={this.state.rotate} 
                                clickedMenuButton={this.state.clickedMenuButton}
                                onClickMenuButton={this.onClickMenuButton} 
                                onNewReceiptHandler={this.onToggleNewReceipt}
                                onNewReportHandler={this.onNewReportHandler}/>
            </div>
        )
    }

    fetchReceipts = async() => {
        const receipts = await getAllReceipts()
        this.setState({ loaded: true })
        this.props.onReceiptsAdded(receipts)
    }

    onClickMenuButton = () => { 
        !this.state.clickedMenuButton ? this.setState({clickedMenuButton: true}) : null
        this.setState(prevState => ({rotate: !prevState.rotate}))
    }

    renderReceiptAdder = () => {
        return (
            <Fragment>
                <Backdrop show={this.state.newReceipt} click={this.onToggleNewReceipt} />
                <ReceiptAdder onCancelHandler={this.onCloseReceiptAdder} show={this.state.newReceipt}/>
            </Fragment>
        )
    }

    onCloseReceiptAdder = () => { this.setState({newReceipt: false}) }

    onToggleNewReceipt = () => { this.setState(prevState => ({newReceipt: !prevState.newReceipt})) }

    onNewReportHandler = () => { this.props.history.push({pathname: '/reports'}) }
}

export const mapStateToProps = state => {
    return {
        receipts: state.receipts
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptList)