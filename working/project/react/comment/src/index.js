// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react'
// import ReactDOM from 'react-dom'
// import CommentApp from './CommentApp'
// import './index.css'

// ReactDOM.render(
//   <CommentApp />,
//   document.getElementById('root')
// )

import React from 'react' 
import ReactDOM from 'react-dom'
import { createStore } from 'redux'   
import { Provider } from 'react-redux' 
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css' 

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}> 
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);