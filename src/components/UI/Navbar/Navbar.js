import React, {Fragment, Component} from 'react'
import './Navbar.scss'
import Items from '../Items/Items'
import { Link } from 'react-router-dom'
import BackDrop from '../BackDrop/BackDrop'
import Sandwich from '../../../assets/img/sandwich.svg'
import logUserOut from '../../../services/logUserOut'

const smallDevice = window.matchMedia('(max-width: 650px)').matches
const linkKalkuli = (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Kalkuli</h1>
    </Link>
)

class Navbar extends Component {

    state = {
        isOpen: false,
        smallDevice: smallDevice
    }

    render(){
        if(this.state.smallDevice){
            let styleSidebar = ["sidebar"]
            if(this.state.isOpen)
                styleSidebar.push('Open')
            else
                styleSidebar.push('Close')
            return(
                <Fragment>
                        <div className="navbar" >
                            {linkKalkuli}
                            <img onClick={this.onClickMenuHandler} src={Sandwich}></img>
                        </div>
                        <div className={styleSidebar.join(' ')}>
                            <div className="sidebar__links">
                                <Items onLogOut={this.logUserOut}/>
                            </div>
                        </div>
                    <BackDrop show={this.state.isOpen} click={this.onClickMenuHandler}/>
                </Fragment>
            )
        }
        else{
            return (
                <Fragment>
                    <header className="navbar">
                        <div className="navbar__name">
                            {linkKalkuli}
                        </div>
                        <nav className="navbar__navigation">
                            <Items onLogOut={this.logUserOut}/>
                        </nav>
                    </header>
                </Fragment>
            )
        }
    }

    onClickMenuHandler = () => {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }

    logUserOut = async() => {
        const response = await logUserOut()
        localStorage.removeItem('auth_token')
        localStorage.removeItem('company_id')
        document.location.reload()
    }
}

export default Navbar
