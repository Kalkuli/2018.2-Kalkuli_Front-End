import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <nav><a href="/"><h1>Kalkuli</h1></a></nav>
            </div>
            <lu className="navbar-menu">                
                <nav><a href="#">Empresa</a></nav>
                <nav><a href="#">Dados</a></nav>
                <nav><a href="/list-all-receipts">Notas</a></nav>
                <nav><a href="#">Sair</a></nav>
            </lu>
        </div>
    )
}
   
export default Navbar
