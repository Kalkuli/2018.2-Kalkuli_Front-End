import React from 'react'
import Modal from '../UI/Modal/Modal'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import './Login.scss'
import InputField from '../UI/Input/InputField'
import eyeImg from '../../assets/img/eye-open.svg'
const Login = (props) => {
  let {inputs} = props
  return(
    <Modal show click={props.onCloseLogIn}>
      <div className="login">
        {/* <div className="closeX"></div> */}
        <h1 className="login__title">Login</h1>
        <div className="login__form">
          {Object.keys(inputs).map(key => (
            <div className="login__form__inputs" key={key}>
              <label  htmlFor={inputs[key].name}
                      style ={{color: inputs[key].color}}>
                      <div className='description'>
                          {inputs[key].name}
                          {inputs[key].name === 'Senha' ?
                            <img src={eyeImg} onClick={props.togglePass} className="see-password"/> : null
                          }
                      </div>
                      <InputField 	classe="login__form__input"
                                    value={inputs[key].value}
                                    valid={inputs[key].valid}
                                    touched={inputs[key].touched}
                                    id={inputs[key].name}
                                    type={inputs[key].type}
                                    onChangeHandler={(event) => props.onChangeHandler(event, key)}/>
              </label>
            </div>
            ))}
        </div>
        <BaseButton type={props.inputsAreValid ? "confirm": "disable"} click={props.onConfirm}>
          Confirma
        </BaseButton>
      </div>
    </Modal>
  )
}

export default Login