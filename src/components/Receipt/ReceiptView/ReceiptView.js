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
import { connect } from 'react-redux'
const smallDevice = window.matchMedia('(max-width: 645px)').matches
var size;
if(smallDevice) 
  size = 'medium'
else 
  size = 'small'


class ReceiptView extends Component {

  state = {
    confirmation: false 
  }

  render() {
    let { receipt } = this.props
    return (
      <Modal>
        {this.state.confirmation ? this.renderConfirmationMessage() : null }
        <div className="receipt-modal-area">
          <Receipt size='large'>
            <div className="receipt-container">
              <div className='receipt-area receipt-font'>
                <div key={'title'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['title'].name}:</b></p>
                  <p className='receipt-font'>{receipt['title']}</p>
                </div>
                {Object.keys(receipt).map(data => {
                  if(data === 'title' || data === 'description' || data === 'tag_id')
                    return null
                  return (
                    <div key={data} className='receipt-area__content'>
                      <p className="receipt-font receipt-area__content__label"><b>{receiptInput[data].name}:</b></p>
                      <p className='receipt-font'>{receipt[data]}</p>
                    </div>
                )})}
                <div key={'description'} className='receipt-area__content'>
                  <p className="receipt-font receipt-area__content__label"><b>{receiptInput['description'].name}:</b></p>
                  <p className='receipt-font'>{receipt['description']}</p>
                </div>
              </div>
              <SavedTagItem name={this.getTagName()} color={this.getTagColor()}/>
            </div>
          </Receipt>

          <div className='area-buttons'>
            <div className='area-buttons__change-buttons'>
              <BaseButton type="confirm" click={this.onConfirmHandler} size={size}>Exportar</BaseButton>
              <BaseButton type="no-background" click={this.onConfirmHandler} size={size}>Editar</BaseButton>
              <BaseButton type="delete" click={this.onConfirmationTrue} size={size}>Excluir</BaseButton>
            </div>
            <div className='area-buttons__confirm'>
              <BaseButton className='confirm-button' type="confirm" click={this.props.onClosePopup} size={size}>Confirmar</BaseButton>
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  getTagName = () => { return this.props.tags[this.props.receipt.tag_id - 1].category }

  getTagColor = () => { return this.props.tags[this.props.receipt.tag_id - 1].color }

  onDeleteHandler = async() => {
    let receipt_id = this.props.receiptId
    const response = await deleteReceipt(receipt_id)
    this.setState({ confirmation: false })
    this.props.onClosePopup()
    this.props.onGetAllReceipts()
  }
  
  onCancelHandler = () => {
    this.setState({confirmation: false})
  }
  
  renderConfirmationMessage = () => {
    return (
      <Fragment>
        <ConfirmationMessage  onDeleteHandler={this.onDeleteHandler}
                              onCancelHandler={this.onCancelHandler}   
                              action="deletar" />
        <BackDrop show={this.state.confirmation} click={this.onCancelHandler}/>
      </Fragment>
    )
  }

  onConfirmationTrue = () => {
    this.setState({confirmation: true})
  }
}
export const mapStateToProps = state => {
	return {
		tags: state.tags
	}
}
export default connect(mapStateToProps)(ReceiptView)