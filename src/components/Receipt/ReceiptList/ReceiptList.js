import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import ReceiptAdder from '../../Receipt/ReceiptAdder/ReceiptAdder'
import Backdrop from '../../UI/BackDrop/BackDrop'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'

class ReceiptList extends Component {

    state = {  
        receipts: [],
        loaded: false,
        rotate: false,
        newReceipt: false,
        clickedMenuButton: false
    }

    componentDidMount() {
        this.getAllReceipts()
    }

    render() {
        return (
            <div >
                <Navbar/>
                { this.state.newReceipt ? this.renderReceiptAdder() : null }
                { this.state.loaded && <List    receipts={this.state.receipts} 
                                                onGetAllReceipts={this.getAllReceipts} /> }
                <MenuButton     rotate={this.state.rotate} 
                                clickedMenuButton={this.state.clickedMenuButton}
                                onClickMenuButton={this.onClickMenuButton} 
                                onNewReceiptHandler={this.onToggleNewReceipt}
                                onNewReportHandler={this.onNewReportHandler}/>
            </div>
        )
    }

    getAllReceipts = async () => {
        const response = await Axios.get('https://kalkuli-gateway.herokuapp.com/api/v1/receipts')
        this.props.onReceiptsAdded(response.data.data.receipts)
        this.setState({ loaded: true })
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

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptList)