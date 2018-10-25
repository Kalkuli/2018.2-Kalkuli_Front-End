import React, {Component} from 'react'
import Modal from '../UI/Modal/Modal'


class Register extends Component {

    render(){
        return(
            <Modal show={this.props.show}>
                <h1>Pronto para ter maior gerenciamento das suas notas?!</h1>
                <form>
                    <label for='propertyName'> 
                        Razão social:
                        <input id='propertyName'></input>
                    </label>
                    <label for='companyEmail'> 
                        email da empresa:
                        <input type='email' id='companyEmail'></input>
                    </label>
                    <label for='companyName'> 
                        Nome Fantasia:
                        <input id='companyName'></input>
                    </label>
                    <label for='companyPhone'> 
                        Telefone da empresa:
                        <input id='companyPhone'></input>
                    </label>
                    <label for='CNPJ'> 
                        CNPJ:
                        <input id='CNPJ'></input>
                    </label>
                    <label for='CEP'> 
                        CEP:
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
                    
                </form>
            </Modal>
        )
    }
}

export default Register;
