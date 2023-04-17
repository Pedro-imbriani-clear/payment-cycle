import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './main/routes'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app'))
reportWebVitals();
