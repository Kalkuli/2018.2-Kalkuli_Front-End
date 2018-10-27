import React, {Component, Fragment} from 'react'

import classes from './Register.scss'
import registerInputsCompany from '../../helpers/registerInputsCompay'
import registerInputsAdm from '../../helpers/registerInputsAdm'
import Input from '../UI/Input/InputFild'


class Form extends Component {
    state = {
        registerInputCompany: registerInputsCompany,
        registerInputAdm: registerInputsAdm,
        password: ''
    }

    render(){
        let {registerInputCompany} = this.state
        let {registerInputAdm} = this.state

        const changeInputColor = {
            color: '#0F8891',
        }

        const inputClasses = []

        if(this.state.registerInputAdm.value === '' ){
            
        }
        
        return(
            <Fragment>
                <h1>Pronto para ter o melhor gerenciamento das suas notas?!</h1>
                <h2>Empresa:</h2>
                <form>
                    {Object.keys(registerInputCompany).map(key =>(
                        <label  key={key} 
                                for={registerInputCompany[key].id}
                                onFocus={() => this.focusCompany(key)}
                                onBlur={()=>this.blurCompany(key)}
                                style={registerInputCompany[key].touched ? changeInputColor : null}
                                style={registerInputCompany[key].value ? changeInputColor : null}>

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
                                style={registerInputAdm[key].touched ? changeInputColor : null}
                                style={registerInputAdm[key].value ? changeInputColor : null}>

                            
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
            </Fragment>
        )
    }

    focusAdm = (inputKey) =>{
        let inputState = {...this.state.registerInputAdm}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        console.log(inputElement.value)
        inputState[inputKey] = inputElement
        this.setState({registerInputAdm: inputState})
    }

    blurAdm = (inputKey) =>{
        let inputState = {...this.state.registerInputAdm}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInputAdm: inputState})
    }

    focusCompany = (inputKey) =>{
        let inputState = {...this.state.registerInputCompany}
        let inputElement = {...inputState[inputKey]}
        inputElement.touched = !inputElement.touched
        inputState[inputKey] = inputElement
        this.setState({registerInputCompany: inputState})
    }  

    blurCompany = (inputKey) =>{
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
		inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
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

        console.log(isValid)

		return isValid
	}
}

export default Form;