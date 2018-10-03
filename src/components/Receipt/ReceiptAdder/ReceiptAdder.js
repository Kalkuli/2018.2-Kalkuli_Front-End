import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'
import axios from 'axios';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import Confirmation from '../../UI/Confirmation/Confirmation'
import Loader from '../../UI/Loader/Loader'

class ReceiptAdder extends Component {
  state = {
    file: null,
    loading: false,
    binaryPDF: null
  }

  render() {

    return (
      <Modal>
        {this.ChoseScreen()}
      </Modal>
    )
  }

  ChoseScreen = () => {
    if(!this.state.loading){
      return(
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler} />
          <div className="receipt-adder__footer">
            <BaseButton type="no-background" click={this.onCancelHandler}>Cancelar</BaseButton>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
          </div>
        </section> 
      )
    }
    else {
      return(
        <Loader/>
      )
    }
  }

  onConfirmHandler = () => {
    this.setState({
      loading: true
    })
    let formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios.post('https://kalkuli-gateway.herokuapp.com/api/v1/extract_data', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      this.props.onFileExtractedAdded(response.data.receipt)
      this.props.history.push({
        pathname: '/compare-data-with-receipt',
      })
    })
  }

  onDropHandler = (file, rejectedFiles) => {
    if (file.length === 1) {
      const currentFile = file[0]
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        this.setState({ binaryPDF: reader.result })
        this.props.onFilePDFAdded(this.state.binaryPDF)
      }, false)
      reader.readAsDataURL(currentFile)
      this.setState({ file: file })
    } else if (rejectedFiles) {
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

  onCancelHandler = () => { console.log("cancel") }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilePDFAdded: (filePDF) => dispatch({ type: actionTypes.ADD_PDF_FILE, filePDF: filePDF}),
    onFileExtractedAdded: (fileExtracted) => dispatch({ type: actionTypes.ADD_EXTRACTED_DATA, fileExtracted: fileExtracted})
  }
}

export default connect(null, mapDispatchToProps)(ReceiptAdder)