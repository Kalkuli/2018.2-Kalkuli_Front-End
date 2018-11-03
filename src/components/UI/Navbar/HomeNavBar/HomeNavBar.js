import React,{Component} from 'react'
import './HomeNavBar.scss'
import Scrollchor from 'react-scrollchor';
import SignUp from '../../Button/SignUp/SignUp'
import LogIn from '../../../LogIn/LogIn'
import BackDrop from '../../BackDrop/BackDrop'
class HomeNavBar extends Component {
  
  state = {
    isTop: true,
    showLogIn: false
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
            <SignUp size="small" click={this.props.click}/>
            <a to="/" className="nav__link" href="">Log in</a>
            {this.showLogIn()}
            <SignUp size="small"/>
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
            <SignUp size="small" click={this.props.click}/>
            <a onClick={(event) => this.handleLogIn(event)} to="/" className="nav__link" href="">Log in</a>
            {this.showLogIn()}
            <SignUp size="small"/>
          </nav>
        </div>
      )
    }
  }

  showLogIn = () => {
    console.log(this.state.showLogIn)
    if(this.state.showLogIn){
      return (
        <React.Fragment>
          <LogIn />
          <BackDrop show click={this.onCloseLogIn}/>
        </React.Fragment> 
      )
    }
  }

  handleLogIn = (event) => {
    event.preventDefault()
    this.setState({showLogIn: true})
  }

  onCloseLogIn = () => {this.setState({showLogIn: false})}
}

export default HomeNavBar