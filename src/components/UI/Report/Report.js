import React from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'
import ReportLabels from '../ReportLabels/ReportLabels';
import ReportWarning from '../ReportWarning/ReportWarning';

const chooseContent = (props) => {
    let text = null
    let subText = null
    switch(props.reportCase){
        case 'reports':
            return(
                <div className="report">
                    <div className="report__content">
                        <ReportLabels/>
                        {props.receipts.map((data) => {
                            return(
                                <ReceiptInfo key={+data.id} date={data.emission_date} cnpj={data.cnpj} price={data.total_price}/>
                            )}
                        )}
                    </div>
                    <p className="report__total" >Valor total: R${props.sum}</p>
                </div>
            )

        case 'do not exist':
            if(props.page === "dashboard"){
                text = " nota"
            } else {
                text = " relatório"
            }

            return(
                <ReportWarning>
                    <h1 className="report__warning__content">Nesse período não existe {text}</h1>
                </ReportWarning>
            )
    
        default:
            if(props.page === "dashboard"){
                text = "Insira uma data valida"
                subText = "Para gerar um relatório"
            } else {
                text = "Clique em um relatório"
                subText = "ou selecione um período de relatórios"
            }
            return(
                <ReportWarning>
                    <h1 className="report__warning__content">{text}</h1>
                    <h2 className="report__warning__content">{subText}</h2>
                </ReportWarning>
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