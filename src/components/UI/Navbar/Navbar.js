import React, {Fragment, Component} from 'react'
import './Navbar.scss'
import Items from '../Items/Items'
import { Link } from 'react-router-dom'
import BackDrop from '../BackDrop/BackDrop'
import Sandwich from '../../../assets/img/sandwich.svg'

const smallDevice = window.matchMedia('(max-width: 650px)').matches
const linkKalkuli = (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Kalkuli</h1>
    </Link>
)

class Navbar extends Component {

    state = {
        isOpen: false
    }

    render(){
        if(smallDevice){
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
                                <Items/>
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
                            <Items/>
                        </nav>
                    </header>
                </Fragment>
            )
        }
    }

    onClickMenuHandler = () => {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
        console.log(this.state.isOpen)
    }
}

export default Navbar
