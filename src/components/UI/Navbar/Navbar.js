import React, {Fragment} from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <Fragment>
            <header className="navbar">
                <div className="navbar__name">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>Kalkuli</h1>
                    </Link>
                </div>
                <nav className="navbar__navigation">
                    <Link to="#" className="navbar__navigation__links">Empresa</Link>
                    <Link to="/reports" className="navbar__navigation__links">Relatórios</Link>
                    <Link to="/dashboard" className="navbar__navigation__links">Dados</Link>
                    <Link to="/list-all-receipts" className="navbar__navigation__links">Notas</Link>
                    <Link to="#" className="navbar__navigation__links">Sair</Link>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar
