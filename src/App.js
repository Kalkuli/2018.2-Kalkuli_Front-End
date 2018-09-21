import React, { Component } from 'react';
import ReceiptAdder from './components/Receipt/ReceiptAdder/ReceiptAdder'
import ReceiptCompare from './components/Receipt/ReceiptCompare/ReceiptCompare'
<<<<<<< cc565a17c80f426958a5cbdca02bf625dacfa620
import Confirmation from './components/Confirmation/Confirmation'
=======
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
>>>>>>> Order all receipts

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => <h1>Home</h1>}/>    
          <Route path='/send-receipt' component={ReceiptAdder} />
          <Route path='/compare-data-with-receipt' component={ReceiptCompare}/>
          <Route path='/edit-receipt-data' render={() => <h1>edit receipt data</h1>} />
<<<<<<< cc565a17c80f426958a5cbdca02bf625dacfa620
          <Route path='/list-all-receipts' render={() => <h1>list all receipts</h1>} />
          <Route path='/confirmation' component={Confirmation} />
=======
          <Route path='/list-all-receipts'component={ReceiptList} />
>>>>>>> Order all receipts
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
