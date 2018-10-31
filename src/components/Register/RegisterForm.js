import React, {Component, Fragment} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import registerInputs from '../../helpers/registerInputs'
import Input from '../UI/Input/InputFild'
import Button from '../UI/Button/BaseButton/BaseButton'


class Form extends Component {
    state = {
        registerInput: registerInputs,
        valid: false 
    }

    render(){
        let {registerInput} = this.state

        const changeInputColorValid = {
            color: '#0F8891'
        }
        
        console.log(this.state.registerInput.propertyName.value)
        return(
            <Modal show={this.props.show}>
                
                <div className='register'>

                    <Fragment>
                        <h1>Pronto para ter o melhor gerenciamento das suas notas?!</h1>
                        <form>
                            {Object.keys(registerInput).map(key =>(
                                <div className='register__form'>
                                    <label  key={key} 
                                            for={registerInput[key].id}
                                            onFocus={() => this.focusHandler(key)}
                                            onBlur={()=>this.blurHandler(key)}
                                            style={registerInput[key].touched || registerInput[key].value ? changeInputColorValid : null}>
                                        <div className='description'>
                                            {registerInput[key].name}
                                        </div>
                                        <Input 	value={registerInput[key].value}
                                                valid={registerInput[key].valid}
                                                touched={registerInput[key].touched}
                                                id={registerInput[key].id}
                                                type={registerInput[key].type}
                                                onChangeHandler={(event) => this.onChangeHandler(event, key)}/>
                                    </label>
                                </div>
                            ))} 
                        </form>
                    </Fragment>
                    <div className='register__button'>
                        <Button type={ this.state.valid ? 'confirm' : 'disable'} >Confirmar</Button>
                    </div>
                </div>
            </Modal>
        )
    }

    focusHandler = (inputKey) =>{
        let inputState = {...this.state.registerInput}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInput: inputState})
    }  

    blurHandler = (inputKey) =>{
        let inputState = {...this.state.registerInput}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInput: inputState})
    }

    onChangeHandler = (event, inputKey) => {
		let inputState = {...this.state.registerInput}
        let inputElement = {...inputState[inputKey]}
        
        inputElement.value = event.target.value
        if(inputElement.validation)
            inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
            
        inputState[inputKey] = inputElement

		let isValid = true
		for(let inputKey in inputState) {
			isValid = (inputState[inputKey].valid && isValid)
        } 
        console.log(inputElement.valid)
        this.setState({registerInput: inputState, valid: isValid}) 
    }

    checkValidity = (value, rules) => {
        let isValid = false
        
		if(rules.required)
			isValid = value.trim() !== ''
		
		if(rules.minLength)
            isValid = value.length >= rules.minLength

        if(rules.aroba)
            isValid = value.indexOf("@") !== -1
            
        if(rules.pass)
            this.setState({password: value})

        if(rules.confPass)
            isValid = this.state.password === value

		return isValid
    }
}

export default Form;