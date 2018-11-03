import React,{Component} from 'react'
import './HomeNavBar.scss'
import Scrollchor from 'react-scrollchor';
import SignUp from '../../Button/SignUp/SignUp'
import Login from '../../../Login/Login'
import BackDrop from '../../BackDrop/BackDrop'
import loginInputs from '../../../../helpers/loginInputs'

class HomeNavBar extends Component {
  
  state = {
    isTop: true,
    showLogin: true,
    inputsAreValid: false,
    inputs: loginInputs
  }
  
  componentDidMount() {
    console.log(this.state.inputs)
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
                  onChangeHandler={this.onChangeHandler}/>
          <BackDrop show click={this.onCloseLogin}/>
        </React.Fragment> 
      )
    }
  }

  onChangeHandler = (event, inputKey) => {
		let inputState = {...this.state.inputs}
    let inputElement = {...inputState[inputKey]}
    inputElement.value = event.target.value
    if(inputElement.validation)
      inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
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
    if(rules.aroba)
      isValid = value.indexOf("@") !== -1
		if(rules.minLength)
			isValid = value.length >= rules.minLength
		return isValid
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.setState({showLogin: true})
  }

  onConfirmLoginHandler = () => {
    alert('iae')
  }

  onCloseLogin = () => {this.setState({showLogin: false})}
}

export default HomeNavBar