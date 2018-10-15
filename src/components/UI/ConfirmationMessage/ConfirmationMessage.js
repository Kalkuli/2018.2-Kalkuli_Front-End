import React from 'react'
import './ConfirmationMessage.scss'
import Modal from '../Modal/Modal'
import Button from '../Button/BaseButton/BaseButton'

const ConfirmationMessage = (props) => (
    <Modal>
        <div className='confirmation-area'>
            <p>Tem certeza que deseja {props.action}?</p>
            <div className='confirmation-area__buttons'>
                <Button type="no-background" click={this.onConfirmHandler}>Cancelar</Button>
                <Button type="delete" click={this.onDeleteHandler}>Deletar</Button>
            </div>
        </div>
    </Modal>
)

export default ConfirmationMessage; 