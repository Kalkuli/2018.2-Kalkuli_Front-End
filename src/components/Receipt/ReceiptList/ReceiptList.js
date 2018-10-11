import React, { Component } from 'react'
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
        display: 'block',
        rotate: false,
        newReceipt: false
    }


    componentDidMount() {
        this.getAllReceipts();
    }

    getAllReceipts = () => {
        Axios.get('https://kalkuli-gateway.herokuapp.com/api/v1/receipts')
            .then((response) => {
                console.log(response);
                this.setState({
                    receipts: response.data.data.receipts,
                    loaded: true
                })
                console.log(this.state);
            })
    }

    changeRotate = () => { 
        this.setState({rotate: !this.state.rotate, display: !this.state.display});
    }

    renderModal = () => {
        return <div>
                <Backdrop show={this.state.newReceipt} click={this.onCloseReceiptAdder} />
                <ReceiptAdder />
               </div>
    } 

    onCloseReceiptAdder = () => {
        this.setState({newReceipt: false})
    }

    onNewReceiptHandler = () => {
        this.setState({newReceipt: true})
    }

    onNewReportHandler = () => {
        this.props.history.push({pathname: '/reports'})
    }

    render() {
        return (
            <div >
                <Navbar/>
                    {this.state.loaded && <List receipts={this.state.receipts} />}
                    {this.state.newReceipt ? this.renderModal() : false}
                    <MenuButton     display={this.state.display} 
                                    rotate={this.state.rotate} 
                                    onClickRotate={this.changeRotate} 
                                    onNewReceiptHandler={this.onNewReceiptHandler}
                                    onNewReportHandler={this.onNewReportHandler}/>
            </div>
        )
    }
}
