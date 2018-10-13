import React from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'

const soma = {
    total: '81,92'
}

const Report = (props) => {
    return (
        <div className="report">
            <div className="report__content">
                {props.data.map((props) => {
                    return(
                    <ReceiptInfo date={props.date} cnpj={props.cnpj} price={props.price}/>
                );
                })}
            </div>
            <p className="report__total" >Valor total: R${soma.total}</p>
        </div>
    )
}

export default Report