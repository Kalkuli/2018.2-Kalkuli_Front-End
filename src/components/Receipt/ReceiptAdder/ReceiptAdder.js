import React from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'

const ReceiptAdder = () => {

  return (
    <section className="receipt-adder">
      <DropArea />
      <div className="receipt-adder__footer">
        <BaseButton type="cancel">Cancelar</BaseButton>
        <BaseButton type="confirm">Confirmar</BaseButton>
      </div>
    </section>
  )
}

export default ReceiptAdder