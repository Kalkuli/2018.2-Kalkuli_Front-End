import React, { Component } from 'react';
import ReceiptAdder from './components/Receipt/ReceiptAdder/ReceiptAdder'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => <h1>Home</h1>}/>    
          <Route path='/send-receipt' component={ReceiptAdder} />
          <Route path='/compare-data-with-receipt' render={() => <h1>compare data</h1>} />
          <Route path='/edit-receipt-data' render={() => <h1>edit receipt data</h1>} />
          <Route path='/list-all-receipts' render={() => <h1>list all receipts</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
