import React, { Component } from 'react';
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
import Dashboard from './components/Dashboard/Dashboard'
import Reports from './components/Reports/Reports'
import ReceiptView from './components/Receipt/ReceiptView/ReceiptView'
import HomePage from './components/HomePage/HomePage'
import ReceiptAdder from './components/Receipt/ReceiptAdder/ReceiptAdder'

import {  BrowserRouter,Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/compare' component={ReceiptAdder} />
          <Route path='/' exact component={HomePage}/> 
          <Route path='/list-all-receipts'component={ReceiptList} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/reports' component={Reports} />
          <Route path='/receipt' component={ReceiptView} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
