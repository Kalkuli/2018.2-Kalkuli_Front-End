import React, {Component} from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'

class ReceiptView extends Component{
    receipt = {
        "company_id": "00.000.000/0000-00",
        "emission_date": "00/00/0000",
        "emission_place": "Gama",
        "tax_value": 20.20
    }
    render(){
        return(
            < Modal>
                < Receipt size='large' className="receipt">
                    <div className='receipt-area receipt-font'>
                        <p>{this.receipt.company_id}</p>
                        <p>{this.receipt.emission_date}</p>
                        <p>{this.receipt.emission_place}</p>
                        <p>{this.receipt.tax_value}</p>

                    </div>
                </Receipt>
                <div className='area-buttons'>
                    <div className='change-buttons'>
                        <BaseButton type="edit" click={this.onConfirmHandler}>Editar</BaseButton>
                        <BaseButton  type="confirm" click={this.onConfirmHandler}>Exportar</BaseButton>
                        <BaseButton  type="cancel" click={this.onConfirmHandler}>Excluir</BaseButton>
                    </div>
                    
                    <BaseButton className='confirm-button' type="confirm" onClick={this.props.closePopup}>Confirmar</BaseButton>

                </div>
                
            </Modal>
        )
    }
}

export default ReceiptView