import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/bootstrap.css'
import './css/wouldyourather.css'
import 'redux'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'



const store= createStore( reducer , middleware)

ReactDOM.render(

   <Provider store ={store}> <App /></Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

