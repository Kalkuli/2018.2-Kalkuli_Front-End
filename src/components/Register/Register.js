import React, {Component} from 'react'

import './Register.scss'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/BaseButton/BaseButton'
import Forms from './RegisterForm'


class Register extends Component {

    render(){
        return(
            
            <Modal show={this.props.show}>
                <div className='register'>
                    <Forms/>
                    <div className='register__button'>
                        <Button type='confirm'>Confirmar</Button>
                    </div>
                </div>
            </Modal>
        )
    }   
}

export default Register;