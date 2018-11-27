import React,{Component} from 'react'
import './HomeNavBar.scss'
import Login from '../../../Login/Login'
import BackDrop from '../../BackDrop/BackDrop'
import loginInputs from '../../../../helpers/loginInputs'
import logUserIn from '../../../../services/logUserIn'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions/actions'
import HomeNavBarLinks from './HomeNavBarLinks'

export class HomeNavBar extends Component {
  
  state = {
    isTop: true,
    showLogin: false,
    inputsAreValid: false,
    inputs: loginInputs,
    registration: ''
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
    let styles = this.getNavBarStyles()
    let size = smallDevice ? 'small' : 'large'

    return (
      <React.Fragment>
        {this.showLogin()}
        <HomeNavBarLinks  style={styles} 
                          size={size} 
                          handleLogin={this.handleLogin}
                          onSingUpHandler={this.props.click}/>
      </React.Fragment>

    )
  }

  showLogin = () => {
    if(this.state.showLogin){
      return (
        <React.Fragment>
          <Login  registration={this.state.registration}
                  onConfirmOk={this.onCloseErrorMessage}
                  inputs={this.state.inputs} 
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
    if(this.props.auth_token)
      this.props.onConfirmOk()
    else
      this.setState({showLogin: true})
  }

  onConfirmLoginHandler = async () => {
    let user = {
      'email': this.state.inputs['email'].value,
      'password': this.state.inputs['password'].value,
    }

    let response = await logUserIn(user)
    if(response !== 'error') {
      this.setState({registration: 'done'})
      this.props.onAddAuthToken(response.token)
      this.props.onConfirmOk()
      localStorage.setItem('auth_token', response.token)
      localStorage.setItem('company_id', response.company_id)
      document.location.reload()
    } else {
      this.setState({registration: 'fail'})
    }
  }

  onCloseErrorMessage = () => {this.setState({registration: ''})}

  onCloseLogin = () => {this.setState({showLogin: false})}

  getNavBarStyles = () => {
    if(this.state.isTop)
      return "nav transparent"
    else
      return "nav color"
  }
}

export const mapStateToProps = state => {
  return {
    auth_token: state.auth_token
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    onAddAuthToken: (token) => dispatch({ type: actionTypes.ADD_AUTH_TOKEN, auth_token: token})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavBar)