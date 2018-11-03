import React from 'react'
import Modal from '../UI/Modal/Modal'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import './Login.scss'
import InputField from '../UI/Input/InputField'
const Login = (props) => {
  console.log(props.inputs)
  let {inputs} = props
  return(
    <Modal show={props.show} click={props.onCloseLogIn}>
      <div className="login">
        <div className="closeX"></div>
        <h1>Login</h1>
        <div className="login__form">
          {Object.keys(inputs).map(key => (
            <div className="login__form__input" key={key}>
              <label  htmlFor={inputs[key].name}
                      style ={inputs[key].valid ? {color: 'red'} : {color: 'green'}}>
                      <div className='description'>
                          {inputs[key].name}
                      </div>
                      <InputField 	value={inputs[key].value}
                                    valid={inputs[key].valid}
                                    touched={inputs[key].touched}
                                    id={inputs[key].name}
                                    type={inputs[key].type}
                                    onChangeHandler={(event) => this.onChangeHandler(event, key)}/>
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