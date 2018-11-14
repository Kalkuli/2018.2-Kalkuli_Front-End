import React, { Component, Fragment } from 'react'
import './ReceiptView.scss'
import Modal from '../../UI/Modal/Modal'
import Receipt from '../../UI/Receipt/Receipt'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import ConfirmationMessage from '../../UI/ConfirmationMessage/ConfirmationMessage'
import BackDrop from '../../UI/BackDrop/BackDrop'
import deleteReceipt from '../../../services/deleteReceipt'
import receiptInput from '../../../helpers/receiptInputs'
import SavedTagItem from '../../UI/TagItem/SavedTagItem/SavedTagItem'

const smallDevice = window.matchMedia('(max-width: 645px)').matches
var size;
if(smallDevice) 
  size = 'medium'
else 
  size = 'small'

class ReceiptView extends Component {

  state = {
    confirmation: false,
    edit: false,
    save: false,
    receipt: receiptInput
  }
  
  render() {
    let classe = this.state.edit ? 'receipt-font receipt-font-input' : 'receipt-font receipt-font-input-disable'
    let { receipt } = this.props
    return (
      <Modal>
        {this.state.confirmation ? this.renderConfirmationMessage() : null }
        {this.state.save ? this.renderConfirmationMessageSave() : null}
        <div className="receipt-modal-area">
          <Receipt size='large'>
            <div className="receipt-container">
              <div className='receipt-area receipt-font'>
                <div key={'title'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['title'].name}:</b></p>
                  
                  <input  className={classe} 
                          value={receipt['title']} />
                </div>
                {Object.keys(receipt).map(data => {
                  if(data === 'title' || data === 'description' || data === 'tag_id')
                    return null
                  return (
                    <div key={data} className='receipt-area__content'>
                      <p className="receipt-font receipt-area__content__label"><b>{receiptInput[data].name}:</b></p>

                      <input  className={classe} 
                              value={receipt[data]}
                              onChangeHandler={(event) => this.onChangeHandler(event, data)}/>
                    </div>
                )})}
                <div key={'description'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['description'].name}:</b></p>
                  
                  <textarea rows='6' 
                            className={classe} 
                            disabled value={receipt['description']}/>

                </div>
              </div>
              <SavedTagItem name={this.props.tagName} color={this.props.tagColor}/>
            </div>
          </Receipt>

          <div className='area-buttons'>
            <div className='area-buttons__change-buttons'>
              <BaseButton type="confirm" click={this.onConfirmHandler} size={size}>Exportar</BaseButton>
              <BaseButton type='no-background'
                          click={this.onEditHandler} 
                          size={size}>
                          {this.state.edit ? 'Cancelar' : 'Editar'}
              </BaseButton>

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
  onChangeHandler = (event,key) =>{
    let inputState = {...this.state.receipt}
    let input = {...this.state.receipt[key]}
    input.value = event.target.value
    inputState[key] = input
    this.setState({receipt: inputState})
  }

  onDeleteHandler = async() => {
    let receipt_id = this.props.receiptId
    const response = await deleteReceipt(receipt_id)
    this.setState({ confirmation: false })
    this.props.onClosePopup()
    this.props.onGetAllReceipts()
  }
  onCancelHandler = () => {
    this.setState({confirmation: false, save: false})
  }
  renderConfirmationMessage = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.onDeleteHandler}
                              onCancelHandler={this.onCancelHandler}   
                              action='deletar' 
                              name={'Deletar'}/>
        <BackDrop show={this.state.confirmation} click={this.onCancelHandler}/>
      </Fragment>
    )
  }

  renderConfirmationMessageSave = () => {
    return (
      <Fragment>
        <ConfirmationMessage  
                              onCancelHandler={this.onCancelHandler}   
                              action='editar' 
                              name={'Editar'}/>
        <BackDrop show={this.state.save} click={this.onCancelHandler}/>
      </Fragment>
    )
  }

  onConfirmEdit = () =>{
    alert('GOO')
  }

  onConfirmationTrue = () => { this.setState({confirmation: true}) }

  onEditHandler = () => {
    this.setState(prevState =>({edit: !prevState.edit}))
  }
}

export default ReceiptView