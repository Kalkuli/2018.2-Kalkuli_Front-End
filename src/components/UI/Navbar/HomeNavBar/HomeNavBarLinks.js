import React from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
import SignUp from '../../Button/SignUp/SignUp'

const HomeNavBarLinks = ({style, size, handleLogin, onSingUpHandler}) => (
  <div className={style}>
    <Link style={{ textDecoration: 'none' }} to='/'><h1 className="nav__logo">Kalkuli</h1></Link>
    <nav className="nav__end">
      {
        size === 'large' ? 
        <React.Fragment>
          <Scrollchor to="#about" className="nav__link">Sobre</Scrollchor>
          <Scrollchor to="#features" className="nav__link">Funcionalidades</Scrollchor>
          <div className="nav__bar"></div>
        </React.Fragment> : null
      }
      <a onClick={handleLogin} className="nav__link" href="">Log in</a>
      <SignUp size="small" click={onSingUpHandler}/>
    </nav>
  </div>
)



export default HomeNavBarLinks