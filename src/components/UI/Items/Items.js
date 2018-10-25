import React, {Fragment} from 'react'
import './Items.scss'
import { Link } from 'react-router-dom'

const Items = () => (

    //criar estilo diferente para a sidenav

    <Fragment>
        <Link to="/dashboard" className="links">Dados</Link>
        <Link to="/list-all-receipts" className="links">Notas</Link>
        <Link to="/reports" className="links">Relatórios</Link>
        <Link to="#" className="links">Empresa</Link>
        <Link to="#" className="links">Sair</Link>
    </Fragment>
)

export default Items