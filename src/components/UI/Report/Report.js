import React from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'

const chooseContent = (props) => {
    if(props.receipts && props.isValid){
        return(
            <div className="report">
                <div className="report__content">
                    <div className="report__content__labels">
                        <p className="report__content__labels__data">Data:</p>
                        <p className="report__content__labels__data">CNPJ:</p>
                        <p className="report__content__labels__data">Valor:</p>
                    </div>
                    {props.receipts.map((data) => {
                        return(
                            <ReceiptInfo key={data.id} date={data.emission_date} cnpj={data.cnpj} price={data.total_price}/>
                        )}
                    )}
                </div>
                <p className="report__total" >Valor total: R${props.sum}</p>
            </div>
        )
    }
    else if(!props.isValid){
        return(
            <div className="report">
                <div className="report__warning pulsing-text-report">
                    <h1 className="report__warning__content">Nesse período não existe nota</h1>
                </div>
            </div>
        )
    }

    else {
        return(
            <div className="report">
                <div className="report__warning pulsing-text-report">
                    <h1 className="report__warning__content">Insira uma data valida</h1>
                    <h2 className="report__warning__content">Para gerar um relatório</h2>
                </div>
            </div>
        )
    }
} 

const Report = (props) => {
    let content = chooseContent(props)
    return (
        <div>
            {content}
        </div>
    )
}


export default Report