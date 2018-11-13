import React, { Component } from 'react';
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
import Dashboard from './components/Dashboard/Dashboard'
import Reports from './components/Reports/Reports'
import ReceiptView from './components/Receipt/ReceiptView/ReceiptView'
import HomePage from './components/HomePage/HomePage'
import { connect } from 'react-redux'
import {  BrowserRouter,Route, Switch, Redirect } from 'react-router-dom'
import * as actionTypes from './store/actions/actions'

class App extends Component {
  
  componentWillMount() {
    let token = localStorage.getItem('auth_token')
    this.props.onAddAuthToken(token)
  }

  render() {

    let routes = null
    if(this.props.auth_token) {
      routes = (
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/dashboard' component={Dashboard} /> 
          <Route path='/list-all-receipts'component={ReceiptList} />
          <Route path='/reports' component={Reports} />
          <Route path='/receipt' component={ReceiptView} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      )
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          {routes}       
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth_token: state.auth_token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddAuthToken: (token) => dispatch({ type: actionTypes.ADD_AUTH_TOKEN, auth_token: token})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
