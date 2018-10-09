import React, { Component } from 'react'
import Axios from 'axios'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'

export default class ReceiptList extends Component {

    state = {  
        loaded: false,
        display: 'block',
        rotate: false
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
        console.log('rodando rodando!')
    }

    render() {
        return (
            <div >
                <Navbar />
                {this.state.loaded && <List receipts={this.state.receipts} />}
                <MenuButton display={this.state.display} rotate={this.state.rotate} onClickRotate={this.changeRotate} />
            </div>
        )
    }
}
