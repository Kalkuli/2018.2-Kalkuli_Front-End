import React, {Component} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/BaseButton/BaseButton'
import registerInputsCompany from '../../helpers/registerInputsCompay'
import registerInputAdm from '../../helpers/registerInputsAdm'
import Input from '../UI/Input/InputFild'


class Register extends Component {
    state = {
        registerInputCompany: registerInputsCompany
    }

    render(){
        let {registerInputCompany} = this.state
        return(
            <Modal show={this.props.show}>
                <div className='register'>
                    <div className='register__form'>
                    <h1>Pronto para ter o melhor gerenciamento das suas notas?!</h1>
                    {Object.keys(registerInputCompany).map(key =>(
                        <form key={key}>
                           <Input 	value={registerInputCompany[key].value}
                                    valid={registerInputCompany[key].valid}
                                    touched={registerInputCompany[key].touched}>{registerInputCompany[key].name}</Input>
                        </form>
                    ))}
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

{/* <h1>Pronto para ter melhor gerenciamento das suas notas?!</h1>
<h2>Empresa:</h2>
<form>
    <label for='propertyName' className='register__form__company' onClick={this.t}> 
        Razão social da Empresa: 
        <input id='propertyName' ></input>
    </label>
    <div className='register__form--company'>  
        <div >
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
            <div className='register__form__local'>
                <label for='city' className='register__form__local__cidade'> 
                    Cidade:
                    <input id='city'></input>
                </label>
                <label for='state'> 
                    Estado:
                    <input id='state'></input>
                </label>
            </div>
        </div>
    </div>
</form>
<h2>Administrador:</h2>
<form className='register__form--adm'>
    <div> 
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
</form> */}
