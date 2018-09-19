import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'

class ReceiptAdder extends Component {

  render() {

    return (
      <Modal>
        <section className="receipt-adder">
          <DropArea />
          <div className="receipt-adder__footer">
            <BaseButton type="cancel" click={this.onCancelHandler}>Cancelar</BaseButton>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
          </div>
        </section>
      </Modal>
    )
  }

  onConfirmHandler = () => {
    this.props.history.push('/compare-data-with-receipt')
  }

  onCancelHandler = () => {
    console.log("cancel")
  }

}

export default ReceiptAdder