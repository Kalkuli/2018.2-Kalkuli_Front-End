import React, {Component} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/BaseButton/BaseButton'
import Form from './Form'


class Register extends Component {

    render(){
        return(
            
            <Modal show={this.props.show}>
                <div className='register'>
                    <Form/>
                    <div className='register__button'>
                        <Button type='confirm'>Confirmar</Button>
                    </div>
                </div>
            </Modal>
        )
    }   
}

export default Register;