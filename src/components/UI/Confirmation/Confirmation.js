import React, { Component } from 'react'
import './Confirmation.scss'
import confirm from '../../../assets/img/confirm.svg'
import Modal from '../Modal/Modal'
import BaseButton from '../Button/BaseButton/BaseButton'

const Confirmation = (props) => (
    <Modal>
        <div className="confirm-area">
        <img className="confirm-icon" src={confirm} alt="Confirmation Icon"/>
        <p className="confirm-message">Nota adicionada com sucesso</p>
        <BaseButton className="button-font" type="confirm" click={props.onConfirmOk}>OK</BaseButton>
        </div>
    </Modal>
)

export default Confirmation