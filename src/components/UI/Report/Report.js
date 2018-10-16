import React, {Component} from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'

class Report extends Component {
    render(){
        let content = this.chooseContent(this.props)
        return (
            <div>
                {content}
            </div>
        )
    }

    chooseContent = (props) => {
        if(props.receipts){
            return(
                <div className="report">
                    <div className="report__content">
                        {props.receipts.map((data) => {
                            return(
                                <ReceiptInfo key={data.id} date={data.emission_date} cnpj={data.cnpj} price={data.total_price}/>
                                )}
                                )
                            }
                    </div>
                    <p className="report__total" >Valor total: R${props.sum}</p>
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
}


export default Report