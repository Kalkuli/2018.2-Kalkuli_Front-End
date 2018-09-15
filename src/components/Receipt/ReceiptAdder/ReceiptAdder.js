import React from 'react'
import './ReceiptAdder.scss'
import ChooseFile from '../../UI/Button/ChooseFile/ChooseFile'

const ReceiptAdder = () => {

  return (
    <section className="receipt-adder">
      <div className="receipt-adder__container">
        <h1 className="receipt-adder__container--title">Arraste o arquivo</h1>
        <p className="receipt-adder__container--p">ou</p>
        <ChooseFile />
        {/* botao */}
      </div>

      <div className="receipt-adder__footer">
        {/* botões */}
      </div>
    </section>
  )
}

export default ReceiptAdder