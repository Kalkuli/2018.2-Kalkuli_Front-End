import React from 'react'
import './Confirmation.scss'
import confirm from '../../../assets/img/confirm.svg'
import Modal from '../Modal/Modal'
import BaseButton from '../Button/BaseButton/BaseButton'
import error from '../../../assets/img/error.svg'

const Confirmation = (props) => {
    let styleText = ["confirm-message"]
    let buttonType
    let image
    let imgClass
    if(props.valid === 'done'){
        image = confirm
        buttonType = 'confirm'
        imgClass = 'confirm-icon'
    }
    else {
        image = error
        buttonType = 'delete'
        styleText.push('error')
        imgClass = 'error-icon'
    }
    return(
        <Modal>
            <div className="confirm-area">
                <img className={imgClass} src={image} alt="Confirmation Icon"/>
                <p className={styleText.join(' ')} >{props.content}</p>
                <BaseButton className="button-font" type={buttonType} click={props.onConfirmOk}>OK</BaseButton>
            </div>
        </Modal>
    )
}

export default Confirmation