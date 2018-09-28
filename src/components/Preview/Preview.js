import React, {Component} from 'react'
import Modal from '../UI/Modal/Modal'
import './Preview.scss'
import preview from '../../assets/img/cupom.jpg'

class Preview extends Component {
    render() {
        return(
            <Modal>
                <img className="preview" src={preview} alt="cupom fiscal"/>
            </Modal>
        )   
    }
}

export default Preview