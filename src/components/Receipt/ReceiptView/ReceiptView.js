import React, {Component} from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'

class ReceiptView extends Component{
    render(){
        return(
            < Modal>
                < Receipt size='small' />
                
            </Modal>
        )
    }
}

export default ReceiptView