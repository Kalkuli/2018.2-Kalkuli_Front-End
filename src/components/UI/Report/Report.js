import React, { Component } from 'react'
import './Report.scss'
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo'

const info = [{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
},
{
    date: 'xx/xx/xxxx',
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    price: 'xx,xx'
}]

const soma = {
    total: 'yy,xx'
}

class Report extends Component {
    render(){
        return(
            <div className="report">
                <div className="report__area">
                    {info.map((dados) => {
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