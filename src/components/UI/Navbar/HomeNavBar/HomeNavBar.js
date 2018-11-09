import React,{Component} from 'react'
import './HomeNavBar.scss'
import Scrollchor from 'react-scrollchor';
import SignUp from '../../Button/SignUp/SignUp'
import Login from '../../../Login/Login'
import BackDrop from '../../BackDrop/BackDrop'
import loginInputs from '../../../../helpers/loginInputs'
import axios from 'axios'

class HomeNavBar extends Component {
  
  state = {
    isTop: true,
    showLogin: false,
    inputsAreValid: false,
    inputs: loginInputs,
  }
  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isTop = window.scrollY < 250;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }
  
  render() {
    
    const smallDevice = window.matchMedia('(max-width: 720px)').matches
    let styles = ["nav"]
    if(this.state.isTop)
      styles.push("transparent")
    else
      styles.push("color")
    if(smallDevice) {
      return(
        <div className={styles.join(' ')}>
          <a><h1 className="nav__logo">Kalkuli</h1></a>
          <nav className="nav__end">
            <a onClick={(event) => this.handleLogIn(event)} className="nav__link" href="">Log in</a>
            {this.showLogin()}
            <SignUp size="small" click={this.props.click}/>
          </nav>
        </div>
      )
    } else {
      return(
        <div className={styles.join(' ')}>
          <a><h1 className="nav__logo">Kalkuli</h1></a>
          <nav className="nav__end">
            <Scrollchor to="#about" className="nav__link">Sobre</Scrollchor>
            <Scrollchor to="#features" className="nav__link">Funcionalidades</Scrollchor>
            <div className="nav__bar"></div>
            <a onClick={(event) => this.handleLogin(event)} className="nav__link" href="">Log in</a>
            {this.showLogin()}
            <SignUp size="small" click={this.props.click}/>
          </nav>
        </div>
      )
    }
  }

  showLogin = () => {
    if(this.state.showLogin){
      return (
        <React.Fragment>
          <Login  inputs={this.state.inputs} 
                  inputsAreValid={this.state.inputsAreValid} 
                  onConfirm={this.onConfirmLoginHandler}
                  onChangeHandler={this.onChangeHandler}
                  togglePass={this.onTogglePasswordType}/>
          <BackDrop show click={this.onCloseLogin}/>
        </React.Fragment> 
      )
    }
  }

  onTogglePasswordType = () => {
    let passwordInput = {...this.state.inputs['password']}
    let passwordType = passwordInput.type
    let newPasswordType = null
    passwordType === 'password' ? newPasswordType = 'text' : newPasswordType = 'password'
    passwordInput['type'] = newPasswordType

    let inputState = {...this.state.inputs}
    inputState['password'] = passwordInput
    this.setState({inputs: inputState})
  }

  onChangeHandler = (event, inputKey) => {
    console.log(this.state.inputs)
		let inputState = {...this.state.inputs}
    let inputElement = {...inputState[inputKey]}
    inputElement.value = event.target.value
    if(inputElement.validation)
      inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
    if(inputElement.value !== '')
      inputElement.touched = true
    else
      inputElement.touched = false

    if(inputElement.valid)
      inputElement.color = '#5DA8C1'
    else if(!inputElement.valid && !inputElement.touched)
      inputElement.color = '#353535'
    else
      inputElement.color ='red'

    inputState[inputKey] = inputElement

		let isValid = true
		for(let inputKey in inputState) {
			isValid = (inputState[inputKey].valid && isValid)
    } 
    this.setState({inputs: inputState, inputsAreValid: isValid}) 
  }

  checkValidity = (value, rules) => {
		let isValid = false
		if(rules.required)
			isValid = value.trim() !== ''
    if(rules.minLength)
			isValid = value.length >= rules.minLength
    if(rules.aroba)
      isValid = value.indexOf("@") !== -1
		return isValid
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.setState({showLogin: true})
  }

  onConfirmLoginHandler = () => {
    let user = {
      'email': this.state.inputs['email'].value,
      'password': this.state.inputs['password'].value,
    }
    axios.post('http://172.21.0.1:5008/api/v1/auth/login', user)
    .then(response => {
      console.log(response)
      
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  onCloseLogin = () => {this.setState({showLogin: false})}
}

export default HomeNavBar