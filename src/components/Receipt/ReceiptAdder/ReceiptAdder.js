import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import Confirmation from '../../UI/Confirmation/Confirmation'
import Loader from '../../UI/Loader/Loader'
import ReceiptCompare from '../ReceiptCompare/ReceiptCompare';
import Colors from '../../UI/Colors/Colors'
import getAllTags from '../../../services/getAllTags'
import createReceipt from '../../../services/createReceipt'
import sendFile from '../../../services/sendFile'
import interpretData from '../../../services/interpretData'
import getStatus from '../../../services/getStatus'
import { baseURL, config } from '../../../services/axiosConfig'
const smallDevice = window.matchMedia('(max-width: 440px)').matches

export class ReceiptAdder extends Component {
  state = {
    file: null,
    extraction: false,
    loading: false,
    fileSelected: false,
    fileSent: true,
    completed: false,
    creatingCategory: false,
    newTag: {},
    smallDevice: smallDevice
  }

  render() {
    let content = this.ChooseScreen()

    if(this.state.extraction)
      content = <ReceiptCompare selectedTag={this.state.newTag} onCancelHandler={this.onCancelHandler} onConfirmButton={this.onConfirmButton} createCategory={this.createCategory} extraction backDropDown={this.jumpExtraction}/>
    if (this.state.fileSent && !this.state.completed && !this.state.creatingCategory) 
      content = <ReceiptCompare selectedTag={this.state.newTag} onCancelHandler={this.onCancelHandler} onConfirmButton={this.onConfirmButton} createCategory={this.createCategory} />
    else if (this.state.completed && !this.state.creatingCategory) 
      content = <Confirmation valid="done" content={'Nota adicionada com sucesso'} onConfirmOk={this.props.onConfirmOk} />
    else if (this.state.creatingCategory)
      content = <Colors onNewTagHandler={this.onNewTagHandler} onCancelHandler={this.onCancelHandler} onConfirmHandler={this.onConfirmCategoryHandler}/>
    
    return (
      <Modal show>
        { content }
      </Modal>
    )
  }

  onNewTagHandler = (tag) => {
    const newTagArray = this.props.tags.filter(tagItem => tagItem.category === tag.category)
    const newTag = newTagArray[0]
    this.setState({
      newTag: newTag,
      creatingCategory: false
     })
  }

  ChooseScreen = () => {
    if (!this.state.loading) {
      return (
        <section className="receipt-adder">
          <DropArea onDropHandler={this.onDropHandler} fileSelected={this.state.fileSelected} />
          <div className="receipt-adder__footer">
            <BaseButton size={this.state.smallDevice ? "small" : null} type="no-background" click={this.jumpExtraction}>Manual</BaseButton>
            {this.state.fileSelected ? <BaseButton size={this.state.smallDevice ? "small" : null} type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton> : <BaseButton size={this.state.smallDevice ? "small" : null} type="disable" >Confirmar</BaseButton>}
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

  jumpExtraction = () => {
    this.setState(prevState => ({
      extraction: !prevState.extraction
    }))
  }

  createCategory = () => {
    this.setState({creatingCategory: true})
  }

  onConfirmButton = async(receipt) => {
    const response = await createReceipt(receipt)
    if(response === 'success')
      this.setState({ completed: true }) 
  }

  onConfirmCategoryHandler = async(tag, callback) => {
    const tags = await getAllTags()
    this.props.onTagsAdded(tags)
    callback(tag)
  }

  onConfirmHandler = async() => {
    this.setState({ loading: true })
    let formData = new FormData()
    formData.append("file", this.state.file[0])
    const response = await sendFile(formData)
    if(response !== 'error') {
      let statusUrl = `https://kalkuli-extraction.herokuapp.com${response}`
      this.checkStatus(statusUrl)
    }
  }

  checkStatus = async(statusUrl) => {
    const status = await getStatus(statusUrl)
    if(status.state === 'SUCCESS') {
      const receipt = await interpretData({ raw_text: status.raw_text })
      if(receipt) {
        this.props.onFileExtractedAdded(receipt)
        this.setState({ fileSent: true, loading: false })
      }
    }
    else if(status.state === 'PENDING') {
      setTimeout(() => {
        this.checkStatus(statusUrl)
      }, 2000)
    }
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

export const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onFilePDFAdded: (filePDF) => dispatch({ type: actionTypes.ADD_PDF_FILE, filePDF: filePDF }),
    onFileExtractedAdded: (fileExtracted) => dispatch({ type: actionTypes.ADD_EXTRACTED_DATA, fileExtracted: fileExtracted }),
    onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}),
    onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptAdder)