import React, {Component} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/BaseButton/BaseButton'
import registerInputsCompany from '../../helpers/registerInputsCompay'
import registerInputsAdm from '../../helpers/registerInputsAdm'
import Input from '../UI/Input/InputFild'


class Register extends Component {
    state = {
        registerInputCompany: registerInputsCompany,
        registerInputAdm: registerInputsAdm
    }

    render(){
        let {registerInputCompany} = this.state
        let {registerInputAdm} = this.state

        const changeInputColor = {
            color: '#0F8891'
        }
        
        return(
            
            <Modal show={this.props.show}>
                <div className='register'>
                    <h1>Pronto para ter o melhor gerenciamento das suas notas?!</h1>
                    <h2>Empresa:</h2>
                    <form>
                        {Object.keys(registerInputCompany).map(key =>(
                            <label  key={key} 
                                    for={registerInputCompany[key].id}
                                    onFocus={() => this.focusCompany(key)}
                                    onBlur={()=>this.blurCompany(key)}
                                    style={registerInputCompany[key].touched ? changeInputColor : null}>

                            {registerInputCompany[key].name}
                            <Input 	value={registerInputCompany[key].value}
                                    valid={registerInputCompany[key].valid}
                                    touched={registerInputCompany[key].touched}
                                    id={registerInputCompany[key].id}
                                    type={registerInputCompany[key].type}
                                    onChangeHandler={(event) => this.onChangeHandlerCompany(event, key)}/>
                            </label>
                        ))}
                    </form>
                    <h2>Administrador:</h2>
                    <form>
                        {Object.keys(registerInputAdm).map(key =>(
                            <label  key={key} 
                                    for={registerInputAdm[key].id}
                                    onFocus={() => this.focusAdm(key)}
                                    onBlur={()=>this.blurAdm(key)}
                                    style={registerInputAdm[key].touched ? changeInputColor : null}>

                                
                                {registerInputAdm[key].name}
                                
                                <Input 	value={registerInputAdm[key].value}
                                        valid={registerInputAdm[key].valid}
                                        touched={registerInputAdm[key].touched}
                                        id={registerInputAdm[key].id}
                                        type={registerInputAdm[key].type}
                                        onChangeHandler={(event) => this.onChangeHandlerAdm(event, key)}
                                        
                                        />
                            </label>
                        ))}
                    </form>
                    <div className='register__button'>
                        <Button type='confirm' >Confirmar</Button>
                    </div>
                </div>
            </Modal>
        )
    }

    focusAdm = (inputKey) =>{
        console.log('focus')
        let inputState = {...this.state.registerInputAdm}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        console.log(inputElement.value)
        inputState[inputKey] = inputElement
        this.setState({registerInputAdm: inputState})
    }

    blurAdm = (inputKey) =>{
        console.log('blur')
        let inputState = {...this.state.registerInputAdm}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInputAdm: inputState})
    }

    focusCompany = (inputKey) =>{
        console.log('focus')
        let inputState = {...this.state.registerInputCompany}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInputCompany: inputState})
    }  

    blurCompany = (inputKey) =>{
        console.log('blur')
        let inputState = {...this.state.registerInputCompany}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInputCompany: inputState})
    }

    onChangeHandlerAdm = (event, inputKey) => {
		let inputState = {...this.state.registerInputAdm}
		let inputElement = {...inputState[inputKey]}
		inputElement.value = event.target.value
		//inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
		inputState[inputKey] = inputElement
		/* let receiptIsValid = true
		for(let inputKey in inputState) {
			receiptIsValid = inputState[inputKey].valid && receiptIsValid
		} */
		this.setState({registerInputAdm: inputState})
    }

    onChangeHandlerCompany = (event, inputKey) => {
		let inputState = {...this.state.registerInputCompany}
		let inputElement = {...inputState[inputKey]}
		inputElement.value = event.target.value
		//inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
        inputState[inputKey] = inputElement

		/* let receiptIsValid = true
		for(let inputKey in inputState) {
			receiptIsValid = inputState[inputKey].valid && receiptIsValid
		} */
		this.setState({registerInputCompany: inputState})
    }
    
}

export default Register;