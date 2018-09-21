import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Navbar from '../../UI/Navbar/Navbar'

const dados = ['1', '2', '3', '3','4','5','6','7', 7, 8 ,8 , 7 , 7 , 7 , 7, 8]
const ReceiptList = () => {
    return(
        <div>
            < Navbar />
            <div className='receipt-all-position'>
                {dados.map( i => {
                    return <Receipt size="small"/>
                })}
            </div>
        </div>
    )
}

export default ReceiptList