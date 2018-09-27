import React, {Component} from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'

class ReceiptView extends Component{
    render(){
        return(
            < Modal>
                < Receipt size='large' className="receipt">
                </Receipt>
                <div className='area-buttons'>
                    <div className='change-buttons'>
                        <BaseButton type="edit" click={this.onConfirmHandler}>Editar</BaseButton>
                        <BaseButton  type="confirm" click={this.onConfirmHandler}>Exportar</BaseButton>
                        <BaseButton  type="cancel" click={this.onConfirmHandler}>Excluir</BaseButton>
                    </div>
                    
                    <BaseButton className='confirm-button' type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>

                </div>
                
            </Modal>
        )
    }
}

export default ReceiptView