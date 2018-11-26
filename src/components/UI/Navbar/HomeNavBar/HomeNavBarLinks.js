import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
import SignUp from '../../Button/SignUp/SignUp'
import { connect } from 'react-redux'

class HomeNavBarLinks extends Component {
  render(){
    
    const isLoggedIn = this.props.auth_token;
    let buttonLogIN;
    let buttonSignUp;

    if (isLoggedIn) {
      buttonLogIN = "Dashboard";
      buttonSignUp = null;
    } 
    else {
      buttonLogIN = "Log In";
      buttonSignUp = <SignUp size="small" click={this.props.onSingUpHandler}/>      
    }

    return (
      <div className={this.props.style}>
        <Link style={{ textDecoration: 'none' }} to='/'><h1 className="nav__logo">Kalkuli</h1></Link>
        <nav className="nav__end">
          {
            this.props.size === 'large' ? 
            <React.Fragment>
              <Scrollchor to="#about" className="nav__link">Sobre</Scrollchor>
              <Scrollchor to="#features" className="nav__link">Funcionalidades</Scrollchor>
              <div className="nav__bar"></div>
            </React.Fragment> : null
          }
          <a onClick={(event) => this.props.handleLogin(event)} className="nav__link" href="">{buttonLogIN}</a>
          {buttonSignUp}
        </nav>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    auth_token: state.auth_token
  }
}

export default connect(mapStateToProps)(HomeNavBarLinks)