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
import ReceiptCompare from '../ReceiptCompare/ReceiptCompare';

class ReceiptAdder extends Component {
  state = {
    file: null,
    loading: false,
    fileSent: false,
    fileSelected: false
  }

  render() {
    return (
      <Modal>
        {this.state.fileSent ? <ReceiptCompare onCancelHandler = {this.onCancelHandler}/> : this.ChooseScreen()}
      </Modal>
    )
  }

  ChooseScreen = () => {
    if(!this.state.loading){
      return(
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler} fileSelected = {this.state.fileSelected} />
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
    axios.post('http://172.23.0.1:5008/api/v1/extract_data', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      this.props.onFileExtractedAdded(response.data.receipt)
      this.setState({
        fileSent: true,
        loading:false
      })
    })
  }

  onDropHandler = (file, rejectedFiles) => {
    if (file.length === 1) {
      const currentFile = file[0]
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        this.props.onFilePDFAdded(reader.result)
      }, false)
      reader.readAsDataURL(currentFile)
      this.setState({ file: file, fileSelected: true })
    } else if (rejectedFiles) {
      this.setState({fileSelected: false})
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

  onCancelHandler = () => { this.setState({fileSent: false, fileSelected: false}) }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilePDFAdded: (filePDF) => dispatch({ type: actionTypes.ADD_PDF_FILE, filePDF: filePDF}),
    onFileExtractedAdded: (fileExtracted) => dispatch({ type: actionTypes.ADD_EXTRACTED_DATA, fileExtracted: fileExtracted})
  }
}

export default connect(null, mapDispatchToProps)(ReceiptAdder)