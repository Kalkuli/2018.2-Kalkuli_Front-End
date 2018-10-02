import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'
import axios from 'axios';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import Confirmation from '../../UI/Confirmation/Confirmation'

class ReceiptAdder extends Component {
  state = {
    file: null,
    preview: null
  }

  render() {

    return (
      <Modal>
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler} />
          <div className="receipt-adder__footer">
            <BaseButton type="no-background" click={this.onCancelHandler}>Cancelar</BaseButton>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
          </div>
        </section>
      </Modal>
    )
  }



  onConfirmHandler = () => {
    let formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios.post('http://172.23.0.1:5008/api/v1/extract_data', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        this.props.history.push({
          pathname: '/compare-data-with-receipt',
          state: {
            receipt: response.data.receipt
          }
        });
      });
  }

  onDropHandler = (file, rejectedFiles) => {
    if (file.length === 1) {
      const currentFile = file[0]
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        this.setState({ preview: reader.result })
        this.props.onFileAdded(this.state.preview)
      }, false)
      reader.readAsDataURL(currentFile)
      this.setState({ file: file });
    } else if (rejectedFiles) {
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

  onCancelHandler = () => { console.log("cancel") }
}

const mapDispatchToProps = dispatch => {
  return {
    onFileAdded: (file) => dispatch({ type: actionTypes.ADD_FILE, file: file })
  }
}

export default connect(null, mapDispatchToProps)(ReceiptAdder)