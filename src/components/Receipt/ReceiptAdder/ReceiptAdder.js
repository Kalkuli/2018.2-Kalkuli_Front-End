import React, { Component } from 'react'
import './ReceiptAdder.scss'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import DropArea from '../../UI/DropArea/DropArea'
import Modal from '../../UI/Modal/Modal'
import axios from 'axios';

class ReceiptAdder extends Component {
  state = {
    file: null
  }

  render() {

    return (
      <Modal>
        <section className="receipt-adder">
          <DropArea onFileDropped={this.handleDrop} />
          <div className="receipt-adder__footer">
            <BaseButton type="cancel" click={this.onCancelHandler}>Cancelar</BaseButton>
            <BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
          </div>
        </section>
      </Modal>
    )
  }

  handleDrop = (file) => {
    this.setState({ file: file });
    console.log(file);
  }

  onConfirmHandler = () => {
    let formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios.post('http://172.31.0.1:5008/api/v1/extract_data', formData, {
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

  onCancelHandler = () => {
    console.log("cancel")
  }

}

export default ReceiptAdder