import React, {Fragment} from 'react'
import './Items.scss'
import { Link } from 'react-router-dom'

const Items = ({ onLogOut }) => (
    <Fragment>
        <Link to="/dashboard" className="links">Dados</Link>
        <Link to="/list-all-receipts" className="links">Notas</Link>
        <Link to="/reports" className="links">Relatórios</Link>
        <Link to="/" onClick={ onLogOut } className="links">Sair</Link>
    </Fragment>
)

export default Items