import React, { Component } from 'react';
import Modal from './components/UI/Modal/Modal'
import ReceiptAdder from './components/Receipt/ReceiptAdder/ReceiptAdder'

class App extends Component {
  render() {
    return (
      <Modal>
        <ReceiptAdder/>
      </Modal>
    )
  }
}

export default App;
