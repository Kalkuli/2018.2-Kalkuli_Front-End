import React, {Fragment} from 'react'
import './Navbar.scss'
import Items from '../Items/Items'
import { Link } from 'react-router-dom'

const smallDevice = window.matchMedia('(max-width: 650px)').matches


const Navbar = () => {
    if(smallDevice){
        return(
            <Fragment>
                <div className="sidebar">
                    <div className="sidebar__button">butao</div>
                    <div className="sidebar__links">
                        <Items/>
                    </div>
                </div>
            </Fragment>
        )
    }
    else{

        return (
            <Fragment>
                <header className="navbar">
                    <div className="navbar__name">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1>Kalkuli</h1>
                        </Link>
                    </div>
                    <nav className="navbar__navigation">
                        <Items/>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Navbar
