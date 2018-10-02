import React, { Component } from 'react'
import Axios from 'axios'

import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'



//const URL = 'URL'

export default class ReceiptList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
        this.getAllReceipts();
    }

    getAllReceipts() {
        Axios.get('http://172.31.0.1:5008/api/v1/receipts')
            .then((response) => {
                console.log(response);
                this.setState({
                    receipts: response.data.data.receipts,
                    loaded: true
                })
                console.log(this.state);
            })
    }

    render() {
        return (
            <div >
                <Navbar />
                {this.state.loaded && <List receipts={this.state.receipts} />}
            </div>
        )
    }
}
