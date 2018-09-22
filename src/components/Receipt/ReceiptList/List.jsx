


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
const dados = ['1', '2', '3', '3','4','5','6','7', 7, 8 ,8 , 7 , 7 , 7 ]
const ReceiptList = () => {
    return(
    
        <div className='receipt-all-position'>
            {dados.map( i => {
                return <Receipt size="small"/>
            })}
        </div>
    
    )
}

export default ReceiptList