import React, { Component } from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'

/*
const info = [{
    date: '27/09/2018',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: '20,48'
},
{
    date: '27/09/2018',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: '20,48'
},
{
    date: '27/09/2018',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: '20,48'
},
{
    date: '27/09/2018',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: '20,48'
},
{
    date: '27/09/2018',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: '20,48'
}]
*/


const soma = {
    total: 'yy,xx'
    }

class Report extends Component {
    render(){
        return(
            <div className="report">
                <div className="report__content">
                    {this.props.data.map((dados) => {
                        return(
                        <ReceiptInfo date={dados.date} cnpj={dados.cnpj} price={dados.price}/>
                    );
                    })}
                </div>
                <p className="report__total" >Valor total: R${soma.total}</p>
            </div>
        )
    }
}

export default Report