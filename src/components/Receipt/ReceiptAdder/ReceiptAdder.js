import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'

class ReceiptAdder extends Component {

  state = {
    preview: null
  }

  render() {

    return (
      <Modal>
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler}/>
          <div className="receipt-adder__footer">
            <BaseButton type="edit" click={this.onCancelHandler}>Cancelar</BaseButton>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
          </div>
        </section>
      </Modal>
    )
  }

  onDropHandler = (file, rejectedFiles) => {  
    if(file.length === 1){
      const currentFile = file[0]
      const reader = new FileReader()
      reader.addEventListener("load", () =>   {
        this.setState({preview: reader.result})
        this.props.onFileAdded(this.state.preview)
      }, false)
      reader.readAsDataURL(currentFile)
    } else if(rejectedFiles) {
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

  onConfirmHandler = () => { this.props.history.push('/compare-data-with-receipt') }

  onCancelHandler = () => { console.log("cancel") }

}

const mapDispatchToProps = dispatch => {
  return {
    onFileAdded: (file) => dispatch({ type: actionTypes.ADD_FILE, file: file})
  }
}

export default connect(null, mapDispatchToProps)(ReceiptAdder)