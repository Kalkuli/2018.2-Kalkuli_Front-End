import React, { Component, Fragment } from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import ConfirmationMessage from '../../UI/ConfirmationMessage/ConfirmationMessage'
import BackDrop from '../../UI/BackDrop/BackDrop'
import deleteReceipt from '../../../services/deleteReceipt'
import updateReceipt from '../../../services/updateReceipt'
import receiptInput from '../../../helpers/receiptInputs'
import SavedTagItem from '../../UI/TagItem/SavedTagItem/SavedTagItem'
import Confirmation from '../../UI/Confirmation/Confirmation'

const smallDevice = window.matchMedia('(max-width: 645px)').matches
var size;
if(smallDevice) 
  size = 'medium'
else 
  size = 'small'

class ReceiptView extends Component {

  state = {
    confirmation: false,
    edit: null,
    save: false,
    receipt: this.props.receipt,
    lastReceiptState: null,
    receiptName: receiptInput
  }
  
  render() {
    let classe = this.state.edit ? 'receipt-font receipt-font-input' : 'receipt-font receipt-font-input-disable'
    return (
      <Modal>
        {console.log(this.state.receipt)}
        {this.state.save ? this.renderConfirmationMessageSave() : null}
        {this.state.edit === false ? this.renderConfirmationMessageCancel() : null}
        {this.state.confirmation ? this.renderConfirmationMessage() : null }
        <div className="receipt-modal-area">
          <Receipt size='large'>
            <div className="receipt-container">
              <div className='receipt-area receipt-font'>
                <div key={'title'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['title'].name}:</b></p>
                  
                  <input  className={classe} 
                          defaultValue={this.state.receipt['title']}
                          onChange={(event) => this.changeHandler(event, 'title')}
                          disabled={!this.state.edit}/>
                </div>
                {Object.keys(this.state.receipt).map(data => {
                  if(data === 'title' || data === 'description' || data === 'tag_id')
                    return null
                  return (
                    <div key={data} className='receipt-area__content'>
                      <p className="receipt-font receipt-area__content__label"><b>{this.state.receiptName[data].name}:</b></p>
                      <input  className={classe} 
                              defaultValue={this.state.receipt[data]}
                              onChange={(event) => this.changeHandler(event, data)}
                              disabled={!this.state.edit}
                              />
                    </div>
                )})}
                <div key={'description'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['description'].name}:</b></p>
                  
                  <textarea disabled={!this.state.edit}
                            className={classe}  
                            onChange={(event) => this.changeHandler(event, 'description')}
                            defaultValue={this.state.receipt['description']}/>
                </div>
              </div>
              <SavedTagItem name={this.props.tagName} color={this.props.tagColor}/>
            </div>
          </Receipt>
          <div className='area-buttons'>
            <div className='area-buttons__change-buttons'>
              <BaseButton type="confirm" click={this.onConfirmHandler} size={size}>Exportar</BaseButton>
              {this.state.edit ? 
              <BaseButton type='no-background'
                          click={this.onCancelEditHandler} 
                          size={size}>
                          Cancelar
              </BaseButton> :
              <BaseButton type='no-background'
                          click={this.onEditHandler} 
                          size={size}>
                          Editar
              </BaseButton>}
              <BaseButton type="delete" click={this.onConfirmationTrue} size={size}>Excluir</BaseButton>
            </div>
            <div className='area-buttons__confirm'>
            {this.state.edit ? 
              <BaseButton className='confirm-button' type="confirm" click={()=> this.setState({save: true})} size={size}>Salvar</BaseButton>
              :<BaseButton className='confirm-button' type="confirm" click={this.props.onClosePopup} size={size}>Confirmar</BaseButton>}
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  changeHandler = (event,key) =>{
    let inputState = {...this.state.receipt}
    let input = {...this.state.receipt[key]}
    input.value = event.target.value
    inputState[key] = input.value
    this.setState({receipt: inputState})
    console.log(this.state.receipt)
    console.log(this.state.receipt['total_price'])
  }

  onDeleteHandler = async() => {
    let receipt_id = this.props.receiptId
    const response = await deleteReceipt(receipt_id)
    this.setState({ confirmation: false })
    this.props.onClosePopup()
    this.props.onGetAllReceipts()
  }

  onCancelHandler = () => {
    console.log("oo")
    this.setState({confirmation: false})
  }

  onCancelHandlerSave = () => {
    this.setState({save: false})
  }

  onCancelHandlerCancel = () => {
    this.setState({edit: true})
  }

  renderConfirmationMessage = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.onDeleteHandler}
                              onCancelHandler={this.onCancelHandler}   
                              action='deletar' 
                              option1={'Cancelar'}
                              option2={'Deletar'}/>
        <BackDrop show={this.state.confirmation} click={this.onCancelHandler}/>
      </Fragment>
    )
  }

  renderConfirmationMessageSave = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.onConfirmEdit}
                              onCancelHandler={this.onCancelHandlerSave}   
                              action='editar' 
                              option1={'Cancelar'}
                              option2={'Salvar'}/>
        <BackDrop show={this.state.save} click={this.onCancelHandlerSave}/>
      </Fragment>
    )
  }

  renderConfirmationMessageCancel = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.props.onClosePopup}
                              onCancelHandler={this.onCancelHandlerCancel}   
                              action='cancelar' 
                              option1={'Não'}
                              option2={'Sim'}/>
        <BackDrop show={!this.state.edit} click={this.onCancelHandlerCancel}/>
      </Fragment>
    )
  }

  onConfirmEdit = async() => {

    let receipt_id = this.props.receiptId
    
    const receipt = {
      "emission_date": this.state.receipt['emission_date'],
      "emission_place": this.state.receipt['emission_place'],
      "tax_value": this.state.receipt['tax_value'],
      "total_price": this.state.receipt['total_price'],
      "title": this.state.receipt['title'],
      "description": this.state.receipt['description'],
      "cnpj": this.state.receipt['cnpj']
    }

    console.log(receipt)

    const response = await updateReceipt(receipt_id, receipt)
    this.setState({ confirmation: false })
    
    this.props.onClosePopup()
    this.props.onGetAllReceipts()
    
    
  }

  

  onConfirmationTrue = () => { this.setState({confirmation: true}) }

  onEditHandler = () => {
    this.setState({edit: true});
  
    const receipt = {...this.state.receipt}
    this.setState({lastReceiptState: receipt})
  }

  onCancelEditHandler = () =>{
    this.setState({edit: false});
    const lastReceipt = {...this.state.lastReceiptState}
    this.setState({receipt: lastReceipt})
    this.setState({lastReceipt: null})
  }
}

export default ReceiptView