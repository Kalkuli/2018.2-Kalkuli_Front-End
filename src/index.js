import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducers/reducer'

const store = createStore(reducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
 