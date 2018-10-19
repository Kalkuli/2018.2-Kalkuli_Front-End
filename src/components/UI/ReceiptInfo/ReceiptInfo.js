import React from 'react'
import './ReceiptInfo.scss'

const ReceiptInfo = (props) => {
    let displayData = new Date(props.date + " " + "GMT-0300").toLocaleDateString()
    return(
        <div className="receipt-info">
            <p className="receipt-info__data ">{displayData}</p>
            <p className="receipt-info__data ">{props.cnpj}</p>
            <p className="receipt-info__data ">R${props.price}</p>
        </div>
    )
}

export default ReceiptInfo