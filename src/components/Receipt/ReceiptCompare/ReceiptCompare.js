import React from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'

const ReceiptCompare = () => {
    return(
        <Modal>
            <div className="compare-area">
                <Receipt/>
                <Receipt/>
            </div>
        </Modal>
    )
}

export default ReceiptCompare