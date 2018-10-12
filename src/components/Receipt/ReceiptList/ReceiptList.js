import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import ReceiptAdder from '../../Receipt/ReceiptAdder/ReceiptAdder'
import Backdrop from '../../UI/BackDrop/BackDrop'

export default class ReceiptList extends Component {

    state = {  
        loaded: false,
        rotate: false,
        newReceipt: false,
        clickedMenuButton: false
    }

    componentDidMount() {
        this.getAllReceipts();
    }

    render() {
        return (
            <div >
                <Navbar/>
                { this.state.newReceipt ? this.renderReceiptAdder() : null }
                { this.state.loaded && <List receipts={this.state.receipts} /> }
                <MenuButton     rotate={this.state.rotate} 
                                clickedMenuButton={this.state.clickedMenuButton}
                                onClickMenuButton={this.onClickMenuButton} 
                                onNewReceiptHandler={this.onToggleNewReceipt}
                                onNewReportHandler={this.onNewReportHandler}/>
            </div>
        )
    }

    getAllReceipts = () => {
        Axios.get('https://kalkuli-gateway.herokuapp.com/api/v1/receipts')
            .then((response) => {
                this.setState({
                    receipts: response.data.data.receipts,
                    loaded: true
                })
            })
    }

    onClickMenuButton = () => { 
        this.setState(prevState => ({rotate: !prevState.rotate, clickedMenuButton: true}))
    }

    renderReceiptAdder = () => {
        return (
            <Fragment>
                <Backdrop show={this.state.newReceipt} click={this.onToggleNewReceipt} />
                <ReceiptAdder show={this.state.newReceipt}/>
            </Fragment>
        )
    }

    onCloseReceiptAdder = () => {
        this.setState({newReceipt: false})
    }

    onToggleNewReceipt = () => {
        this.setState(prevState => ({newReceipt: !prevState.newReceipt}))
    }

    onNewReportHandler = () => {
        this.props.history.push({pathname: '/reports'})
    }
}
