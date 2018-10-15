import React from 'react'
import './ConfirmationMessage.scss'
import Modal from '../Modal/Modal'


const ConfirmationMessage = (props) => (
    <Modal>
        <h1>Tem certeza que deseja {props.action}?</h1> 

    </Modal>
)
export default ConfirmationMessage; 