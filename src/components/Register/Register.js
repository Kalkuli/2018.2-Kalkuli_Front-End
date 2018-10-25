import React, {Component} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/BaseButton/BaseButton'


class Register extends Component {

    render(){
        return(
            <Modal show={this.props.show}>
                <div className='register'>
                    <div className='register__form'>
                        <h1>Pronto para ter melhor gerenciamento das suas notas?!</h1>
                        <h2>Empresa:</h2>
                        <form>
                            <div className='register__form--space'>
                                <label for='propertyName'> 
                                    Razão social da Empresa: 
                                    <input id='propertyName'></input>
                                </label>
                                <label for='companyEmail'> 
                                    Email da Empresa:
                                    <input type='email' id='companyEmail'></input>
                                </label>
                                <label for='companyName'> 
                                    Nome Fantasia da Empresa:
                                    <input id='companyName'></input>
                                </label>
                                <label for='companyPhone'> 
                                    Telefone Empresarial:
                                    <input id='companyPhone'></input>
                                </label>
                            </div>
                            <div>
                                <label for='CNPJ'> 
                                    CNPJ da Empresa:
                                    <input id='CNPJ'></input>
                                </label>
                                <label for='CEP'> 
                                    CEP da Empresa:      
                                    <input id='CEP'></input>
                                </label>
                                <label for='city'> 
                                    Cidade:
                                    <input id='city'></input>
                                </label>
                                <label for='state'> 
                                    Estado:
                                    <input id='state'></input>
                                </label>
                            </div>
                        </form>
                        <h2>Administrador:</h2>
                        <form>
                            <div className='register__form--space'> 
                                <label for='admName'> 
                                    Nome do Administrador:    
                                    <input id='admName'></input>
                                </label>
                                <label for='admEmail'> 
                                    Email do Administrador:
                                    <input type='email' id='admEmail'></input>
                                </label>
                            </div>
                            <div>
                                <label for='admPassword'> 
                                    Senha do Administrador:
                                    <input type='password' id='admPassword'></input>
                                </label>
                                <label for='confPassword'> 
                                    Confirmar Senha:
                                    <input type='password' id='confPassword'></input>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className='register__buttons'>
                        <Button type='confirm'>Confirmar</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Register;
