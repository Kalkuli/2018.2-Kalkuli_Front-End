


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
const dadosNota = [{
    nomeEmpresa: 'João LTDA',
    produto: 'Pão de queijo',
    valor: 5.50
},{
    nomeEmpresa: 'Maia LTDA',
    produto: 'Carne',
    valor: 15.00
}, {
    nomeEmpresa: 'X LTDA',
    produto: 'X',
    valor: 'XX.XX'
}]
const ReceiptList = () => {
    return(
        <div className='receipt-all-position'>
            {dadosNota.map( dados => {
                return <div>
                            <Receipt size="small">
                                <div className='receipt-font'>
                                    <div className='dadosNotas'>
                                        <div className='dados'>{dados.nomeEmpresa}</div>
                                        <div className='dados'>{dados.produto}</div>
                                        <div className='dados'>{dados.valor}</div>
                                    </div>
                                </div>
                            </Receipt>
                        
                        </div>
            })}
        </div>
    
    )
}

export default ReceiptList



