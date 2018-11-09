import React, { Component } from 'react';
import ReceiptList from './components/Receipt/ReceiptList/ReceiptList'
import Dashboard from './components/Dashboard/Dashboard'
import Reports from './components/Reports/Reports'
import ReceiptView from './components/Receipt/ReceiptView/ReceiptView'
import HomePage from './components/HomePage/HomePage'
import { connect } from 'react-redux'
import {  BrowserRouter,Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  
  render() {
    this.props.auth_token ? console.log('logado') : console.log('tchau')
    return (
      <BrowserRouter>
       <Switch>
          <Route path='/' exact component={HomePage}/> 
          <PrivateRoute token={this.props.auth_token} path='/list-all-receipts'component={ReceiptList} />
          <PrivateRoute token={this.props.auth_token} path='/dashboard' component={Dashboard} />
          <PrivateRoute token={this.props.auth_token} path='/reports' component={Reports} />
          <PrivateRoute token={this.props.auth_token} path='/receipt' component={ReceiptView} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const PrivateRoute = ({ component: Component, token: token, ...rest}) => (
  <Route {...rest} render={(props) => (
    token ? <Component {...props}/> : <Redirect to='/'/>)} />
)

const mapStateToProps = state => {
  return {
    auth_token: state.auth_token
  }
}

export default connect(mapStateToProps)(App);
