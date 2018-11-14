import React from 'react'
import './ConfirmationMessage.scss'
import Modal from '../Modal/Modal'
import BaseButton from '../Button/BaseButton/BaseButton'

const ConfirmationMessage = (props) => (
    <Modal>
        <div className='confirmation-area'>
            <p>Tem certeza que deseja {props.action}?</p>
            <div className='confirmation-area__buttons'>
                <BaseButton type="no-background" click={props.onCancelHandler}>Cancelar</BaseButton>
                <BaseButton type={"delete"} click={props.onDeleteHandler}>{props.name}</BaseButton>
            </div>
        </div>
    </Modal>
)

export default ConfirmationMessage; 