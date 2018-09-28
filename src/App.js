import React, { Component } from 'react';
import ReceiptAdder from './components/Receipt/ReceiptAdder/ReceiptAdder'
import ReceiptCompare from './components/Receipt/ReceiptCompare/ReceiptCompare'
import Confirmation from './components/Confirmation/Confirmation'
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
import Dashboard from './components/Dashboard/Dashboard'
import Reports from './components/Reports/Reports'

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
          <Route path='/list-all-receipts'component={ReceiptList} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/reports' component={Reports} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
