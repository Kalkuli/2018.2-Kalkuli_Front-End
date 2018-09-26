


/*
import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'




export default props =>{
    
    const renderReceipts = () =>{
        const list = props.list     
        return list.map(receipt =>(
            <div key={receipt._id}>
               <Receipt size="small"/>
            </div>
        ))
    }
    return(
        <div className='receipt-all-position'>
            {renderReceipts}
        </div>
    )
}*/



import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'

const ReceiptList = (props) => {
    return (
        <div className='receipt-all-position'>
            {props.receipts.map(receipt => {
                return <div key={receipt.id}>
                    <Receipt size="small">
                        <div className='receipt-font'>
                            <div className='dadosNotas'>
                                <div className='dados'>{receipt.emission_date}</div>
                                <div className='dados'>{receipt.emission_place}</div>
                                <div className='dados'>{receipt.total_price}</div>
                            </div>
                        </div>
                    </Receipt>

                </div>
            })}
        </div>

    )
}

export default ReceiptList



