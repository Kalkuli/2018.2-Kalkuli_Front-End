import React, { Component } from 'react';
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
import Dashboard from './components/Dashboard/Dashboard'
import Reports from './components/Reports/Reports'
import ReceiptView from './components/Receipt/ReceiptView/ReceiptView'
import HomePage from './components/HomePage/HomePage'
import { connect } from 'react-redux'
import {  BrowserRouter,Route, Switch } from 'react-router-dom'
import * as actionTypes from './store/actions/actions'

export class App extends Component {
  
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
          <Route render={this.notFoundRoute} />
        </Switch>
      )
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          {routes}       
          <Route render={this.notFoundRoute} />
        </Switch>
      </BrowserRouter>
    )
  }

  notFoundRoute = () => {
    return <h1>Not found</h1>
  }
}
export const mapStateToProps = state => {
  return {
    auth_token: state.auth_token
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    onAddAuthToken: (token) => dispatch({ type: actionTypes.ADD_AUTH_TOKEN, auth_token: token})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
