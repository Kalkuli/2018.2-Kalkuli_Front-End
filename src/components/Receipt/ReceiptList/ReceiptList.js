import React, { Component } from 'react'
import Axios from 'axios'

import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'



//const URL = 'URL'

export default class ReceiptList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            loaded: false,
            rotated: false,
            display: 'block',
        }

        this.changeRotate = this.changeRotate.bind(this);
    }

    componentDidMount() {
        this.getAllReceipts();
    }

    getAllReceipts() {
        Axios.get('http://kalkuli-gateway.herokuapp.com/api/v1/receipts')
            .then((response) => {
                console.log(response);
                this.setState({
                    receipts: response.data.data.receipts,
                    loaded: true
                })
                console.log(this.state);
            })
    }
    changeRotate(){ 
        this.setState({rotated: !this.state.rotated, display: !this.state.display});
    }

    render() {
        return (
            <div >
                <Navbar />
                {this.state.loaded && <List receipts={this.state.receipts} />}
                <div className='receiptplus scalehover' onClick={this.changeRotate} >
                    <div className='receipt__plus' 
                    style={{transform: this.state.rotated ? 'rotate(45deg)' : 'rotate(0)'}} />
                </div>
                <div className='receipt__options'>
                    <div className='receipt__options--newReceipt scalehover'
                    style={{display: this.state.display ? 'none' : 'block'}}>
                        <div className='receipt__img__container'>
                            <div className='receipt__options__imgReceipt'/>
                        </div>
                    </div>

                    <div className='receipt__options--newReport scalehover'
                    style={{display: this.state.display ? 'none' : 'block'}}>
                        <div className='receipt__img__container'>
                            <div className='receipt__options__imgReport'/>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
