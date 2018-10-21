import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import ConfirmationMessage from '../../UI/ConfirmationMessage/ConfirmationMessage'
import BackDrop from '../../UI/BackDrop/BackDrop'
import deleteReceipt from '../../../services/deleteReceipt'

class ReceiptView extends Component {

  state = {
    confirmation: false 
  }

  render() {
    let { receipt } = this.props
    return (
      <Modal>
        {this.state.confirmation ? this.renderConfirmationMessage() : null }
        <Receipt size='large'>
          <div className='receipt-area receipt-font'>
            {Object.keys(receipt).map(data => (
              <div key={data} className='receipt-area__content'>
                <p className="receipt-font receipt-area__content__label"><b>label:</b></p>
                <p>{receipt[data]}</p>
              </div>
            ))}
          </div>
        </Receipt>

        <div className='area-buttons'>
          <div className='area-buttons__change-buttons'>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Exportar</BaseButton>
            <BaseButton type="no-background" click={this.onConfirmHandler}>Editar</BaseButton>
            <BaseButton type="delete" click={this.onConfirmationTrue}>Excluir</BaseButton>
          </div>
          <BaseButton className='confirm-button' type="confirm" click={this.props.onClosePopup}>Confirmar</BaseButton>
        </div>
      </Modal>
    )
  }

  onDeleteHandler = async() => {
    let receipt_id = this.props.receipt.id
    const response = await deleteReceipt(receipt_id)
    console.log(response)
    this.setState({ confirmation: false })
    this.props.onClosePopup()
    this.props.onGetAllReceipts()
  }
  
  onCancelHandler = () => {
    this.setState({confirmation: false})
  }
  
  renderConfirmationMessage = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.onDeleteHandler}
                              onCancelHandler={this.onCancelHandler}   
                              action="deletar" />
        <BackDrop show={this.state.confirmation} click={this.onCancelHandler}/>
      </Fragment>
    )
  }

  onConfirmationTrue = () => {
    this.setState({confirmation: true})
  }
}

export default ReceiptView