import React from 'react'
import './ConfirmationMessage.scss'
import Modal from '../Modal/Modal'
import BaseButton from '../Button/BaseButton/BaseButton'

const ConfirmationMessage = (props) => {
    return(
        <Modal>
            <div className='confirmation-area'>
                <p>Tem certeza que deseja {props.action}?</p>
                <div className='confirmation-area__buttons'>
                    <BaseButton type={props.color1 ? props.color1 : "no-background"} click={props.onCancelHandler}>{props.option1}</BaseButton>
                    <BaseButton type={props.color2 ? props.color2 : "delete"} click={props.onDeleteHandler}>{props.option2}</BaseButton>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmationMessage; 