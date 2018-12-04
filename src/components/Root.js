import React, { Component } from 'react'
import { createStore } from 'redux'
import reducers from '../reducers/index.js'
import { Provider } from 'react-redux'
import App from './App.js'

const store = createStore(reducers,{todos:[{content:'今天完成todo',id:'111',done:false}]})

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
