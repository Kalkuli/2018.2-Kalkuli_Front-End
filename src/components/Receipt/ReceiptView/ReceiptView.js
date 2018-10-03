import React, {Component} from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'

class ReceiptView extends Component{
  receipt = {
    "cnpj": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20,
    "total_price": 40.23
  }
  
  render(){
    return(
      <Modal>
        <Receipt size='large'>
          <div className='receipt-area receipt-font'>
            <div className='receipt-area__content'>
              <p className="receipt-font receipt-area__content__label"><b>CNPJ:</b></p>
              <p>{this.receipt.cnpj}</p>
            </div>
            <div className='receipt-area__content'>
              <p className="receipt-font receipt-area__content__label"><b>Data:</b></p>
              <p>{this.receipt.emission_date}</p>
            </div>
            <div className='receipt-area__content'>
              <p className="receipt-font receipt-area__content__label"><b>Lugar:</b></p>
              <p>{this.receipt.emission_place}</p>
            </div>
            <div className='receipt-area__content'>
              <p className="receipt-font receipt-area__content__label"><b>Impostos:</b></p>
              <p>{this.receipt.tax_value}</p>
            </div>
            <div className='receipt-area__content'>
              <p className="receipt-font receipt-area__content__label"><b>Total:</b></p>
              <p>{this.receipt.total_price}</p>
            </div>
          </div>
        </Receipt>

        <div className='area-buttons'>
          <div className='area-buttons__change-buttons'>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Exportar</BaseButton>
            <BaseButton type="no-background" click={this.onConfirmHandler}>Editar</BaseButton>
            <BaseButton type="delete" click={this.onConfirmHandler}>Excluir</BaseButton>
          </div>
          
          <BaseButton className='confirm-button' type="confirm" click={this.props.onClosePopup}>Confirmar</BaseButton>
        </div>
      </Modal>
    )
  }
}

export default ReceiptView