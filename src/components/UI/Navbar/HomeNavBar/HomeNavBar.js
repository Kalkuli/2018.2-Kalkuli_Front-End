import React,{Component} from 'react'
import './HomeNavBar.scss'
import Scrollchor from 'react-scrollchor';
class HomeNavBar extends Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isTop = window.scrollY < 550;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render() {
    let styles = ["nav"]
    if(this.state.isTop)
      styles.push("transparent")
    else
      styles.push("color")
    
    return(
      <nav className={styles.join(' ')}>
        <a><h1 className="nav__logo">Kalkuli</h1></a>
        <div className="nav__end">
          <Scrollchor to="#about" className="nav__link">Sobre</Scrollchor>
          <Scrollchor to="#features" className="nav__link">Funcionalidades</Scrollchor>
          <div className="nav__bar"></div>
          <a to="#about" className="nav__link" href="#">Log in</a>
          <a to="#about" className="nav__link nav__button" href="#">Cadastre sua empresa</a>
        </div>
      </nav>
    )
  }
}

export default HomeNavBar