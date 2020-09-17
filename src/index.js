import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import Department from './components/Department/DepSec';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
;
;

ReactDOM.render(
  
  
  <Homepage/>    
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
