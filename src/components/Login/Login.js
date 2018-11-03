import React from 'react'
import Modal from '../UI/Modal/Modal'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import './Login.scss'
const Login = (props) => {
  return(
    <Modal show={props.show} click={props.onCloseLogIn}>
      <div className="login">
        <div className="closeX"></div>
        <h1>Login</h1>
        <div className="login__form__inputs">
          
        </div>
        <BaseButton type={props.inputsAreValid ? "confirm": "disable"} click={props.onConfirm}>
          Confirma
        </BaseButton>
      </div>
    </Modal>
  )
}

export default Login