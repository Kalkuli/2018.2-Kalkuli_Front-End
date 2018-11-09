import React, {Component} from 'react'
import axios from 'axios'
import './Form.scss'
import Modal from '../UI/Modal/Modal'
import registerInputs from '../../helpers/registerInputs'
import Input from '../UI/Input/InputField'
import Button from '../UI/Button/BaseButton/BaseButton'
import Confirmation from '../UI/Confirmation/Confirmation';

let changeInputColorValid = {
    color: '#0F8891'
}

let changeInputColorInvalid = {
    color: 'red'
}

let textContent

class Form extends Component {
    state = {
        registerInput: registerInputs,
        valid: false,
        registration: 'doing'
    }

    render(){
        let content = this.chooseContent()
        return(
            <Modal show={this.props.show}>
                {content}
            </Modal>
        )
    }

    chooseContent = () => {
        let onOk
        if(this.state.registration === 'fail'){
            onOk = this.onFailOK
            textContent = 'Não conseguimos salvar sua empresa nos nossos sistemas'
        }
        else {
            onOk = this.props.OKfunc
            textContent = 'Empresa adicionada com sucesso'
        }
        if(this.state.registration === 'done' || this.state.registration === 'fail'){
            return(
                <Confirmation content={textContent} onConfirmOk={onOk} valid={this.state.registration} />
            )
        }
        else {
            let {registerInput} = this.state
            return(
                <div className='register'>
                    <h1>Pronto para ter o melhor gerenciamento das suas notas?!</h1>
                        <form>
                            {Object.keys(registerInput).map(key =>(
                                <div className='register__form' key={key}>
                                    <label  htmlFor={registerInput[key].id}
                                            onFocus={this.focusHandler.bind(this, key)}
                                            onBlur={this.blurHandler.bind(this, key)}
                                            style ={this.chooseStyle(registerInput, key)}>
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
                    <div className='register__button'>
                        <Button type={ this.state.valid ? 'confirm' : 'disable'} click={this.state.valid ? this.submitInputs : null}>Confirmar</Button>
                    </div>
                </div>
            )
        }
    }

    chooseStyle = (registerInput, key) => {
        if(!registerInput[key].value){
            return null
        }
        else if(registerInput[key].value && registerInput[key].valid){
            return changeInputColorValid
        }
        else{
            return changeInputColorInvalid
        }
    }
    
    onFailOK = () => {this.setState(prevState => ({registration: prevState.value}))}

    submitInputs = () => {
        const registerData = {
            "company_name": this.state.registerInput.propertyName.value,
            "cnpj": this.state.registerInput.CNPJ.value,
            "company_email": this.state.registerInput.companyEmail.value,
            "fantasy_name": this.state.registerInput.companyName.value,
            "cep": this.state.registerInput.CEP.value,
            "city": this.state.registerInput.city.value,
            "state": this.state.registerInput.state.value,
            "company_phone": this.state.registerInput.companyPhone.value,
            "username": this.state.registerInput.admName.value,
            "email": this.state.registerInput.admEmail.value,
            "password": this.state.registerInput.admPassword.value
        } 

        console.log(registerData)

        axios.post('http://172.21.0.1:5008/api/v1/auth/register', registerData)
        .then(response =>{
            this.setState({registration: 'done'})
            console.log(response)
        })
        .catch((error)=>{
            this.setState({registration: 'fail'})
            textContent = error.message
            console.log(error.response)
        })
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