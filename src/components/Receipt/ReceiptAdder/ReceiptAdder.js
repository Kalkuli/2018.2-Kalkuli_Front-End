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
import Colors from '../../UI/Colors/Colors'
import getAllTags from '../../../services/getAllTags'

class ReceiptAdder extends Component {
  state = {
    file: null,
    loading: false,
    fileSelected: false,
    fileSent: true,
    completed: false,
    creatingCategory: false,
    newTag: {}
  }

  render() {
    let content = this.ChooseScreen()
    if (this.state.fileSent && !this.state.completed && !this.state.creatingCategory) {
      content = <ReceiptCompare selectedTag={this.state.newTag} onCancelHandler={this.onCancelHandler} onConfirmButton={this.onConfirmButton} createCategory={this.createCategory} />
    } 
    else if (this.state.completed && !this.state.creatingCategory) {
      content = <Confirmation valid="done" content={'Nota adicionada com sucesso'} onConfirmOk={this.props.onConfirmOk} />
    }
    else if (this.state.creatingCategory){
      content = <Colors onNewTagHandler={this.onNewTagHandler} onCancelHandler={this.onCancelHandler} onConfirmHandler={this.onConfirmCategoryHandler}/>
    }
    return (
      <Modal show>
        {content}
      </Modal>
    )
  }

  onNewTagHandler = (tag) => {
    this.setState({newTag: tag})
  }

  ChooseScreen = () => {
    if (!this.state.loading) {
      return (
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler} fileSelected={this.state.fileSelected} />
          <div className="receipt-adder__footer">
            <BaseButton type="no-background" click={this.props.onCancelHandler}>Cancelar</BaseButton>
            {this.state.fileSelected ? <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton> : <BaseButton type="disable" >Confirmar</BaseButton>}
          </div>
        </section>
      )
    }
    else {
      return (
        <Loader />
      )
    }
  }

  createCategory = () => {
    this.setState({creatingCategory: true})
  }

  onConfirmButton = (receipt) => {
    console.log(receipt)
    axios.post('http://172.21.0.1:5008/api/v1/receipt', {
      "receipt": {
        ...receipt,
        company_id: 1
      }
    })
      .then(() => {
        this.setState({
          completed: true
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onConfirmCategoryHandler = async() => {
    const tags = await getAllTags()
    this.props.onTagsAdded(tags)
    this.setState({creatingCategory: false})
  }

  onConfirmHandler = () => {
    this.setState({
      loading: true
    })
    let formData = new FormData();
    formData.append("file", this.state.file[0]);

    axios.post('http://172.21.0.1:5001/extract', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        let statusUrl = 'http://172.21.0.1:5001' + response.data.location;
        this.checkStatus(statusUrl)
      })
  }

  checkStatus = (statusUrl) => {
    axios.get(statusUrl)
      .then((status) => {
        if (status.data.state === 'SUCCESS') {
          axios.post('http://172.21.0.1:5008/api/v1/interpret_data', { raw_text: status.data.raw_text })
            .then((response) => {
              this.props.onFileExtractedAdded(response.data.receipt)
              this.setState({
                fileSent: true,
                loading: false
              })
            })
        }
        else if (status.data.state === 'PENDING') {
          setTimeout(() => {
            this.checkStatus(statusUrl)
          }, 2000);
        }
      });
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
      this.setState({ fileSelected: false })
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

  onCancelHandler = () => {
    if(this.state.creatingCategory){
      this.setState({creatingCategory: false})
    }
    else {
      this.setState({ fileSent: false, fileSelected: false }) 
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilePDFAdded: (filePDF) => dispatch({ type: actionTypes.ADD_PDF_FILE, filePDF: filePDF }),
    onFileExtractedAdded: (fileExtracted) => dispatch({ type: actionTypes.ADD_EXTRACTED_DATA, fileExtracted: fileExtracted }),
    onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}),
    onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags })
  }
}

export default connect(null, mapDispatchToProps)(ReceiptAdder)