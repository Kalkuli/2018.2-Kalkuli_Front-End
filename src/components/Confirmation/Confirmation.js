import React from 'react'
import './Confirmation.scss'
import confirm from '../../assets/img/confirm.svg'
import Modal from '../UI/Modal/Modal'
import BaseButton from '../UI/Button/BaseButton/BaseButton'

const Confirmation = () => {
    return(
        <Modal>
            <div className="confirm-area">
            <img className="confirm-icon" src={confirm} alt="Confirmation Icon"/>
            <p className="confirm-message">Nota adicionada com sucesso</p>
            <BaseButton className="button-font" type="confirm" click={this.onConfirmHandler}>OK</BaseButton>
            </div>
        </Modal>
    )
}

export default Confirmation