import React from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'

const ReceiptCompare = () => {
    return(
        <Modal>
            <div className="compare-area">
                <div className="compare-area__preview">
                </div>

                <Receipt size="large">
                    <h1>aasdadasd</h1>
                </Receipt>
            </div>
        </Modal>
    )
}

export default ReceiptCompare