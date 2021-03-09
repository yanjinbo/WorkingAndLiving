import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from './containers/Header'
import { createStore } from 'redux'
import Content from './containers/Content'
import './index.css'

// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
} 

const store = createStore(themeReducer)

class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return { store }
  }
  render () {
    console.log(this.context)
    return (
      <div>
        <Header />
        <Content />
      </div> 
    )
  }
}

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Provider store={store}>
      <Index />
  </Provider>,
  document.getElementById('root')
)