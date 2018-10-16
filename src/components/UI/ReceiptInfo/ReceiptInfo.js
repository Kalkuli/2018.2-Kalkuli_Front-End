import React from 'react'
import './ReceiptInfo.scss'

const ReceiptInfo = (props) => {

    return(
        <div className="receipt-info">
            <p className="receipt-info__data ">{props.date}</p>
            <p className="receipt-info__data ">{props.cnpj}</p>
            <p className="receipt-info__data ">R${props.price}</p>
        </div>
    )
}

export default ReceiptInfo